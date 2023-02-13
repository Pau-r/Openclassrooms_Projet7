import "../../styles/SASS/components/tag.scss";

function Tag(props) {
  const tag = props.tag;
  return (
    <div className="tag-location">
      <p className="text-tag">{tag}</p>
    </div>
  );
}

export default Tag;
