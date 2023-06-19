import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useFetchGdsQuery, useFetchAnswersGdsQuery } from '../../../../store';

function CheckBoxQuestion({ question, options, onAnswer }) {
  const [selectedOption, setSelectedOption] = useState('');
  const {_, isFetching: answersIsFetching} = useFetchAnswersGdsQuery();

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

function GDS() {
  const { data: dataGDS, isFetching: GDSIsFetching } = useFetchGdsQuery();
  const { data: dataAnswers, isFetching: answersIsFetching } = useFetchAnswersGdsQuery();
  const [answers, setAnswers] = useState({});
  const [totalWeight, setTotalWeight] = useState(0);

  console.log(dataGDS);

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
    <div className="GDS">
      <div className="homeContainer">
        <div className="search">
        </div>
          <div>
            <Container>
              <h1 className="title">GDS</h1>
              <Form className>
                <p className="instructions">Por favor, Seleccione la opción correcta para cada pregunta:</p>
                {!GDSIsFetching && dataGDS.questions.map((question) => (
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

export default GDS;