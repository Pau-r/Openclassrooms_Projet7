import "../../styles/SASS/components/tag.scss";

function Tag(props) {
  const tag = props.tag;
  return (
    <div className="tag-location">
      <h3>{tag}</h3>
    </div>
  );
}

export default Tag;
