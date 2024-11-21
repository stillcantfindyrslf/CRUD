const indexRepository = require('../repository/indexRepository');

class IndexUseCase {
    execute() {
        const data = indexRepository.fetchData();
        return { success: true, data };
    }
}

module.exports = new IndexUseCase();