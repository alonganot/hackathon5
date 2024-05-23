from json import load
from pathlib import Path
from kubernetes import client


class GetSecrets:
    def __init__(self, secret_name) -> None:
        try:
            # Load Kubernetes/OpenShift configuration from the default location
            config.load_kube_config()

            # Create an instance of the Kubernetes client
            core_api = client.CoreV1Api()

            namespace = 'sayeret'

            # Retrieve a specific secret by name
            secret = core_api.read_namespaced_secret(secret_name, namespace)

            # Decode and access the secret data
            self.decoded_data = {key: value.decode('utf-8') for key, value in secret.data.items()}

        except Exception:
            current_dir: Path = Path(__file__).parent
            with open(current_dir.joinpath('config.json')) as config_file:
                config = load(config_file)
