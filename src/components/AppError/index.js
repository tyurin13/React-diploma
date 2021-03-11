const AppError = (props) => {

  return (
    <div>
      <button onClick={props.history.push('/')}>Go to Main</button>
      ERROR!
    </div>
  )
}

export default AppError