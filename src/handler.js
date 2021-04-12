const addNoteHandler = (request, h)=>{
  const {title = 'untitled', tags, body} = request.payload;
};

module.exports = {addNoteHandler};
