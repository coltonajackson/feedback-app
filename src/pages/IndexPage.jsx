import React from 'react';
import FeedbackList from '../components/FeedbackList';
import FeedbackStats from '../components/FeedbackStats';
import FeedbackForm from '../components/FeedbackForm';
import { FeedbackProvider } from '../context/FeedbackContext';

function IndexPage() {

  return (
    <FeedbackProvider>
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
    </FeedbackProvider>
  )
}

export default IndexPage