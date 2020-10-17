import { faTrash, faList } from  '@fortawesome/fontawesome-free-solid';
import fontawesome from '@fortawesome/fontawesome';

export default {
    init: () => fontawesome.library.add(
        faTrash,
        faList
    )
};
