import { ISynthesisSession } from "../construct-compat";
import { Stack } from "../stack";
import { addStackArtifactToAssembly, assertBound } from "./_shared";
import { IStackSynthesizer } from "./types";

/**
 * Configuration properties for DefaultStackSynthesizer
 */
export interface DefaultStackSynthesizerProps {
  /**
   * Qualifier to disambiguate multiple environments in the same account
   *
   * You can use this and leave the other naming properties empty if you have deployed
   * the bootstrap environment with standard names but only differnet qualifiers.
   */
  readonly qualifier?: string;
}

/**
 * Uses conventionally named roles and reify asset storage locations
 *
 * This synthesizer is the only StackSynthesizer that generates
 * an asset manifest, and is required to deploy CDK applications using the
 * `ros-cdk/app-delivery` CI/CD library.
 *
 * Requires the environment to have been bootstrapped with Bootstrap Stack V2.
 */
export class DefaultStackSynthesizer implements IStackSynthesizer {
  /**
   * Default ARN qualifier
   */
  public static readonly DEFAULT_QUALIFIER = "hnb659fds";

  private _stack?: Stack;
  // private readonly files: NonNullable<cxschema.AssetManifest['files']> = {};

  constructor() {}

  public bind(stack: Stack): void {
    this._stack = stack;
  }

  public synthesizeStackArtifacts(session: ISynthesisSession): void {
    assertBound(this.stack);

    const artifactId = this.writeAssetManifest();

    addStackArtifactToAssembly(session, this.stack, {}, [artifactId]);
  }

  protected get stack(): Stack | undefined {
    return this._stack;
  }

  /**
   * Write an asset manifest to the Cloud Assembly, return the artifact IDs written
   */
  private writeAssetManifest(): string {
    assertBound(this.stack);

    const artifactId = `${this.stack.artifactId}.assets`;

    return artifactId;
  }
}
