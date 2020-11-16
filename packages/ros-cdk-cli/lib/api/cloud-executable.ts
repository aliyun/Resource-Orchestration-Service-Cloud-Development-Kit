import * as cxapi from '@ros-cdk/ros-cxapi';
import { debug } from '../logging';
import { Configuration } from '../settings';
import { CloudAssembly } from './cloud-assembly';

/**
 * @returns output directory
 */
type Synthesizer = (config: Configuration) => Promise<cxapi.CloudAssembly>;

export interface CloudExecutableProps {
  /**
   * Application configuration (settings and context)
   */
  configuration: Configuration;

  /**
   * Callback invoked to synthesize the actual stacks
   */
  synthesizer: Synthesizer;
}

/**
 * Represent the Cloud Executable and the synthesis we can do on it
 */
export class CloudExecutable {
  private _cloudAssembly?: CloudAssembly;

  constructor(private readonly props: CloudExecutableProps) {}

  /**
   * Return whether there is an app command from the configuration
   */
  public get hasApp() {
    return !!this.props.configuration.settings.get(['app']);
  }

  /**
   * Synthesize a set of stacks
   */
  public async synthesize(): Promise<CloudAssembly> {
    if (!this._cloudAssembly) {
      this._cloudAssembly = await this.doSynthesize();
    }
    return this._cloudAssembly;
  }

  private async doSynthesize(): Promise<CloudAssembly> {

    // We may need to run the cloud executable multiple times in order to satisfy all missing context
    // (When the executable runs, it will tell us about context it wants to use
    // but it missing. We'll then look up the context and run the executable again, and
    // again, until it doesn't complain anymore or we've stopped making progress).
    let previouslyMissingKeys: Set<string> | undefined;
    while (true) {
      const assembly = await this.props.synthesizer(this.props.configuration);

      if (assembly.manifest.missing) {
        const missingKeys = missingContextKeys(assembly.manifest.missing);

        let tryLookup = true;
        if (previouslyMissingKeys && setsEqual(missingKeys, previouslyMissingKeys)) {
          debug('Not making progress trying to resolve environmental context. Giving up.');
          tryLookup = false;
        }

        previouslyMissingKeys = missingKeys;

        if (tryLookup) {
          debug('Some context information is missing. Fetching...');

          // await contextproviders.provideContextValues(assembly.manifest.missing, this.props.configuration.context, this.props.sdkProvider);

          // Cache the new context to disk
          await this.props.configuration.saveContext();

          // Execute again
          continue;
        }
      }

      return new CloudAssembly(assembly);
    }
  }
}

/**
 * Return all keys of missing context items
 */
function missingContextKeys(missing?: cxapi.MissingContext[]): Set<string> {
  return new Set((missing || []).map((m) => m.key));
}

function setsEqual<A>(a: Set<A>, b: Set<A>) {
  if (a.size !== b.size) {
    return false;
  }
  for (const x of a) {
    if (!b.has(x)) {
      return false;
    }
  }
  return true;
}
