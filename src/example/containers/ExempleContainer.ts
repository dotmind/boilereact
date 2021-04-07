import Example, { StateProps, DispatchProps } from 'example/components/Exemple';
import { RootState } from 'internal/rootReducer';
import { connect } from 'react-redux';
import { fetchDog } from 'example/actions/exempleActions';

const mapStateToProps = (state: RootState): StateProps => ({
  dogs: state.exempleState.dogs,
  status: state.exempleState.status,
});
const mapDispatchToProps: DispatchProps = {
  fetchDog,
};

export default connect(mapStateToProps, mapDispatchToProps)(Example)
