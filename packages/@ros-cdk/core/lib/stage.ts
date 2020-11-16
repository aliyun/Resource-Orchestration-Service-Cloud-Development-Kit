import * as cxapi from "@ros-cdk/ros-cxapi";
import { Construct, IConstruct } from "./construct-compat";
import { synthesize } from "./private/synthesis";

/**
 * Initialization props for a stage.
 */
export interface StageProps {
  /**
   * The output directory into which to emit synthesized artifacts.
   *
   * Can only be specified if this stage is the root stage (the app). If this is
   * specified and this stage is nested within another stage, an error will be
   * thrown.
   *
   * @default - for nested stages, outdir will be determined as a relative
   * directory to the outdir of the app. For apps, if outdir is not specified, a
   * temporary directory will be created.
   */
  readonly outdir?: string;
}

/**
 * An abstract application modeling unit consisting of Stacks that should be
 * deployed together.
 *
 * Derive a subclass of `Stage` and use it to model a single instance of your
 * application.
 *
 * You can then instantiate your subclass multiple times to model multiple
 * copies of your application which should be be deployed to different
 * environments.
 */
export class Stage extends Construct {
  /**
   * Return the stage this construct is contained with, if available. If called
   * on a nested stage, returns its parent.
   *
   * @experimental
   */
  public static of(construct: IConstruct): Stage | undefined {
    return construct.node.scopes.reverse().slice(1).find(Stage.isStage);
  }

  /**
   * Test whether the given construct is a stage.
   *
   * @experimental
   */
  public static isStage(x: any): x is Stage {
    return x !== null && x instanceof Stage;
  }

  /**
   * The default region for all resources defined within this stage.
   *
   * @experimental
   */
  // public readonly region?: string;

  /**
   * The default account for all resources defined within this stage.
   *
   * @experimental
   */
  // public readonly account?: string;

  /**
   * The cloud assembly builder that is being used for this App
   *
   * @experimental
   * @internal
   */
  public readonly _assemblyBuilder: cxapi.CloudAssemblyBuilder;

  /**
   * The name of the stage. Based on names of the parent stages separated by
   * hypens.
   *
   * @experimental
   */
  public readonly stageName: string;

  /**
   * The parent stage or `undefined` if this is the app.
   * *
   * @experimental
   */
  public readonly parentStage?: Stage;

  /**
   * The cached assembly if it was already built
   */
  private assembly?: cxapi.CloudAssembly;

  constructor(scope: Construct, id: string, props: StageProps = {}) {
    super(scope, id);

    if (id !== "" && !/^[a-z][a-z0-9\-\_\.]+$/i.test(id)) {
      throw new Error(
        `invalid stage name "${id}". Stage name must start with a letter and contain only alphanumeric characters, hypens ('-'), underscores ('_') and periods ('.')`
      );
    }

    this.parentStage = Stage.of(this);

    // this.region = props.env?.region ?? this.parentStage?.region;
    // this.account = props.env?.account ?? this.parentStage?.account;

    this._assemblyBuilder = this.createBuilder(props.outdir);
    this.stageName = [this.parentStage?.stageName, id]
      .filter((x) => x)
      .join("-");
  }

  /**
   * Artifact ID of the assembly if it is a nested stage. The root stage (app)
   * will return an empty string.
   *
   * Derived from the construct path.
   *
   * @experimental
   */
  public get artifactId() {
    if (!this.node.path) {
      return "";
    }
    return `assembly-${this.node.path
      .replace(/\//g, "-")
      .replace(/^-+|-+$/g, "")}`;
  }

  /**
   * Synthesize this stage into a cloud assembly.
   *
   * Once an assembly has been synthesized, it cannot be modified. Subsequent
   * calls will return the same assembly.
   */
  public synth(options: StageSynthesisOptions = {}): cxapi.CloudAssembly {
    if (!this.assembly) {
      this.assembly = synthesize(this, {
        skipValidation: options.skipValidation,
      });
    }

    return this.assembly;
  }

  private createBuilder(outdir?: string) {
    // cannot specify "outdir" if we are a nested stage
    if (this.parentStage && outdir) {
      throw new Error('"outdir" cannot be specified for nested stages');
    }

    // Need to determine fixed output directory already, because we must know where
    // to write sub-assemblies (which must happen before we actually get to this app's
    // synthesize() phase).
    return this.parentStage
      ? this.parentStage._assemblyBuilder.createNestedAssembly(
          this.artifactId,
          this.node.path
        )
      : new cxapi.CloudAssemblyBuilder(outdir);
  }
}

/**
 * Options for assemly synthesis.
 */
export interface StageSynthesisOptions {
  /**
   * Should we skip construct validation.
   * @default - false
   */
  readonly skipValidation?: boolean;
}
