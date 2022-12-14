const React = require('react')
const Def = require('../default')

function show (data) {
     // If there are no comments:
     let comments = (
      <h3 className="inactive">
          No comments yet!
      </h3>
  )
  // If there are comments:
  if(data.place.comments.length) {
      comments = data.place.comments.map(c => {
          return (
              <div className="border col-sm-4">
                  <h2 className="rant">{ c.rant ? 'Rant!❌' : 'Rave!✅' }</h2>
                  <h4>{ c.content }</h4>
                  <h3>
                      <strong>- { c.author }</strong>
                  </h3>
                  <h4>Rating: { c.stars }</h4>
                  <form method="POST" action={ `/places/${data.place.id}/comment/${c.id}?_method=DELETE` }>
                        <input type="submit" className="btn btn-danger" value="Delete Comment" />
                    </form>
                  </div>
          )
      })
    }
    return (
        <Def>
          <main>
            <div className="row">
              <div className="col-sm-6">
                <img src={data.place.pic} alt={data.place.name} />
                <h3>
                  Located in {data.place.city}, {data.place.state}
                </h3>
              </div>
              <div className="col-sm-6">
                <h2>Description</h2>
                <h3>
                  {data.place.showEstablished()}
                </h3>
                <h4>
                  Serving {data.place.cuisines}
                </h4>
              </div>
            <h1>{ data.place.name }</h1>
            <h3>Currently Unrated</h3>
            <p>Comments</p>
            <div>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
            Edit
            </a> 
            <form method="POST" action={`/places/${data.id}/delete?_method=DELETE`}> 
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
</form> 
</div>
          </div>
          </main>
        </Def>
    )
}

module.exports = show


