class IndexRepository {
    fetchData() {
        return {message: 'Hello from repository'};
    }
}

module.exports = new IndexRepository();