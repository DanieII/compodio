from radio_scrape.radio_scrape.server_sync.Sync_helper import Sync_helper

def sync_db():

    server_syncer = Sync_helper()

    # Use db folder as save folder
    server_syncer.synch_tables('db/', f'compodio.sql', 'compodio.tar.gz')