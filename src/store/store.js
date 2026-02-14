
import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "./clientSlice";
import pdfReducer  from "./pdfSlice";
import extractedDataReducer from "./extractedDataSlice";
import clientProfileReducer from "./clientProfileSlice";
import scoresInsightReducer from "./scoresInsightSlice";
import extractionReducer from './extractionSlice';

export const store = configureStore({
  reducer: {
    clients: clientsReducer,
      pdf: pdfReducer,
      extractedData: extractedDataReducer,
       clientProfile: clientProfileReducer,
       scoresInsight: scoresInsightReducer,
      extraction: extractionReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['pdf/setUploadedFile'],
        ignoredPaths: ['pdf.uploadedFile'],
      },
    }),

});

