using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.StackProps")]
    public class StackProps : AlibabaCloud.SDK.ROS.CDK.Core.IStackProps
    {
        /// <summary>A description of the stack.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - No description.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? Description
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
        public bool? EnableResourcePropertyConstraint
        {
            get;
            set;
        }

        /// <summary>(experimental) The ALIYUN environment (account/region) where this stack will be deployed.</summary>
        /// <remarks>
        /// Set the <c>region</c>/<c>account</c> fields of <c>env</c> to either a concrete value to
        /// select the indicated environment (recommended for production stacks), or to
        /// the values of environment variables
        /// <c>CDK_DEFAULT_REGION</c>/<c>CDK_DEFAULT_ACCOUNT</c> to let the target environment
        /// depend on the ALIYUN credentials/configuration that the CDK CLI is executed
        /// under (recommended for development stacks).
        ///
        /// If the <c>Stack</c> is instantiated inside a <c>Stage</c>, any undefined
        /// <c>region</c>/<c>account</c> fields from <c>env</c> will default to the same field on the
        /// encompassing <c>Stage</c>, if configured there.
        ///
        /// If either <c>region</c> or <c>account</c> are not set nor inherited from <c>Stage</c>, the
        /// Stack will be considered "<em>environment-agnostic</em>"". Environment-agnostic
        /// stacks can be deployed to any environment but may not be able to take
        /// advantage of all features of the CDK.
        ///
        /// <strong>Default</strong>: - The environment of the containing `Stage` if available,
        /// otherwise create the stack will be environment-agnostic.
        ///
        /// <strong>Stability</strong>: Experimental
        /// </remarks>
        /// <example>
        /// <code>// Use a concrete account and region to deploy this stack to:
        /// // `.account` and `.region` will simply return these values.
        /// new Stack(app, 'Stack1', {
        ///   env: {
        ///     account: '123456789012',
        ///     region: 'cn-hangzhou'
        ///   },
        /// });
        /// 
        /// // Use the CLI's current credentials to determine the target environment:
        /// // `.account` and `.region` will reflect the account+region the CLI
        /// // is configured to use (based on the user CLI credentials)
        /// new Stack(app, 'Stack2', {
        ///   env: {
        ///     account: process.env.CDK_DEFAULT_ACCOUNT,
        ///     region: process.env.CDK_DEFAULT_REGION
        ///   },
        /// });
        /// 
        /// // Define multiple stacks stage associated with an environment
        /// const myStage = new Stage(app, 'MyStage', {
        ///   env: {
        ///     account: '123456789012',
        ///     region: 'cn-hangzhou'
        ///   }
        /// });
        /// 
        /// // both of these stacks will use the stage's account/region:
        /// // `.account` and `.region` will resolve to the concrete values as above
        /// new MyStack(myStage, 'Stack1');
        /// new YourStack(myStage, 'Stack2');
        /// 
        /// // Define an environment-agnostic stack:
        /// // `.account` and `.region` will resolve to `{ "Ref": "ALIYUN::AccountId" }` and `{ "Ref": "ALIYUN::Region" }` respectively.
        /// // which will only resolve to actual values by ROS during deployment.
        /// new MyStack(app, 'Stack1');</code>
        /// </example>
        [JsiiOptional]
        [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Environment\"}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Core.IEnvironment? Env
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "metadata", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}", isOptional: true)]
        public System.Collections.Generic.IDictionary<string, object>? Metadata
        {
            get;
            set;
        }

        /// <summary>Name to deploy the stack with.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - Derived from construct path.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "stackName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? StackName
        {
            get;
            set;
        }

        /// <summary>Synthesis method to use while deploying this stack.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - `DefaultStackSynthesizer`
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "synthesizer", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IStackSynthesizer\"}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Core.IStackSynthesizer? Synthesizer
        {
            get;
            set;
        }

        /// <summary>Stack tags that will be applied to all the taggable resources and the stack itself.</summary>
        /// <remarks>
        /// <strong>Default</strong>: {}
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}", isOptional: true)]
        public System.Collections.Generic.IDictionary<string, string>? Tags
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "version", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? Version
        {
            get;
            set;
        }
    }
}
