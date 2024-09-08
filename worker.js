/* Importacion de la libreria a usar */
import { WebWorkerMLCEngineHandler, MLCEngine } from "https://esm.run/@mlc-ai/web-llm"

const engine = new MLCEngine()
const handler = new WebWorkerMLCEngineHandler(engine)

onmessage = msg =>{
    handler.onmessage(msg)
}