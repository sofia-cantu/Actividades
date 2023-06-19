import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useFetchRelojQuery, useFetchAnswersRelojQuery } from '../../../../store';

function CheckBoxQuestion({ question, options, onAnswer }) {
  const [selectedOption, setSelectedOption] = useState('');
  const { _, isFetching: answersIsFetching } = useFetchAnswersRelojQuery();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    onAnswer(event.target.value);
  };

  return (
    <div className="form-questions">
      <Form.Group>
        <Form.Label className="question">{question}</Form.Label>
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
      </Form.Group>
    </div>
  );
}

function Reloj() {
  const { data: dataReloj, isFetching: RelojIsFetching } = useFetchRelojQuery();
  const { data: dataAnswers, isFetching: answersIsFetching } = useFetchAnswersRelojQuery();
  const [answers, setAnswers] = useState({});
  const [totalWeight, setTotalWeight] = useState(0);

  console.log(dataReloj);

  const handleAnswer = (question, answer) => {
    if (answers[question] === answer) {
      // Si la opción seleccionada es la misma que la anterior, no hacer nada
      return;
    }

    setAnswers((prevAnswers) => ({ ...prevAnswers, [question]: answer }));

    const selectedAnswer = dataAnswers.answers.find((a) => a.answer_id.toString() === answer);

    setTotalWeight((prevTotalWeight) => prevTotalWeight + selectedAnswer.weight);
  };

  return (
    <div className="Reloj">
      <div className="homeContainer">
        <div className="search"></div>
        <div className="content">
          <Container>
            <h1 className="title">Reloj</h1>
            <Form>
              <p className="instructions">Por favor, seleccione la opción correcta para cada pregunta:</p>
              {!RelojIsFetching && dataReloj.questions.map((question) => (
                <CheckBoxQuestion
                  key={question.question_id}
                  question={question.sub_question !== '' ? question.sub_question : question.question}
                  options={!answersIsFetching && dataAnswers.answers.filter((answer) => answer.question_id === question.question_id)}
                  onAnswer={handleAnswer}
                />
              ))}
              <Button className="submit-btn" variant="primary">Submit</Button>
              <p className="total-weight">Total weight: {totalWeight}</p>
            </Form>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Reloj;
