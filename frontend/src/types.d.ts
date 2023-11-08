import { ReturnType } from 'react-redux'

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
