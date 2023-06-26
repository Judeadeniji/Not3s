const AlbumSingleComponent = ({ params, data }) => {
  return (
    <div key="AlbumSingleComponent">
    <h1>
      Artist: {params.artist_id}
    </h1>
    <h1>
      Title: {params.id}
    </h1>
    </div>
  );
}
export default AlbumSingleComponent;
