import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useFetchMmseQuery, useFetchAnswersMmseQuery } from '../../../../store';

function CheckBoxQuestion({ question, options, onAnswer }) {
  const [selectedOption, setSelectedOption] = useState('');
  const {_, isFetching: answersIsFetching} = useFetchAnswersMmseQuery();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    onAnswer(event.target.value);
  };

  return (
    <div className="form-questions" style={{ marginBottom: '20px' }}>
      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          {question}
        </Form.Label>
        <Col sm={10}>
          {!answersIsFetching && options.map((option) => (
            <Form.Check
              key={option.answer_id}
              type="radio"
              label={option.answer}
              value={option.answer_id.toString()}
              checked={selectedOption === option.answer_id.toString()}
              onChange={handleOptionChange}
            />
          ))}
        </Col>
      </Form.Group>
    </div>

  );
}

function MMSE() {
  const { data: dataMmse, isFetching: MmseIsFetching } = useFetchMmseQuery();
  const { data: dataAnswers, isFetching: answersIsFetching } = useFetchAnswersMmseQuery();
  const [answers, setAnswers] = useState({});
  const [totalWeight, setTotalWeight] = useState(0);

  console.log(dataMmse);

  const handleAnswer = (question, answer) => {

    if (answers[question] === answer) {
      // Si la opción seleccionada es la misma que la anterior, no hacer nada
      return;
    }

    setAnswers((prevAnswers) => ({...prevAnswers, [question]: answer}));

    const selectedAnswer = dataAnswers.answers.find((a) => a.answer_id.toString() === answer);

    setTotalWeight((prevTotalWeight) => prevTotalWeight + selectedAnswer.weight);
  };

  return (
    <div className="MMSE">
      <div className="homeContainer">
        <div className="search">
        </div>
          <div>
            <Container>
              <h1 className="title">MMSE</h1>
              <Form className>
                <p className="instructions">Por favor, Seleccione la opción correcta para cada pregunta:</p>
                {!MmseIsFetching && dataMmse.questions.map((question) => (
                  <CheckBoxQuestion
                    key={question.question_id}
                    question={question.sub_question !==''? question.sub_question: question.question}
                    options={!answersIsFetching && dataAnswers.answers.filter((answer) => answer.question_id === question.question_id)}
                    onAnswer={handleAnswer}
                  />
                ))}
                <button></button>
                <p>Total weight: {totalWeight}</p>
                </Form>
            </Container>
          </div>
      </div>
    </div>

  );
}

export default MMSE;