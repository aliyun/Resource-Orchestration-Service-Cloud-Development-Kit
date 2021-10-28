using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiInterface(nativeType: typeof(IStackProps), fullyQualifiedName: "@alicloud/ros-cdk-core.StackProps")]
    public interface IStackProps
    {
        /// <summary>A description of the stack.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - No description.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        bool? EnableResourcePropertyConstraint
        {
            get
            {
                return null;
            }
        }

        [JsiiProperty(name: "metadata", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, object>? Metadata
        {
            get
            {
                return null;
            }
        }

        /// <summary>Name to deploy the stack with.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - Derived from construct path.
        /// </remarks>
        [JsiiProperty(name: "stackName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? StackName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Synthesis method to use while deploying this stack.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - `DefaultStackSynthesizer`
        /// </remarks>
        [JsiiProperty(name: "synthesizer", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IStackSynthesizer\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Core.IStackSynthesizer? Synthesizer
        {
            get
            {
                return null;
            }
        }

        /// <summary>Stack tags that will be applied to all the taggable resources and the stack itself.</summary>
        /// <remarks>
        /// <strong>Default</strong>: {}
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, string>? Tags
        {
            get
            {
                return null;
            }
        }

        [JsiiProperty(name: "version", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Version
        {
            get
            {
                return null;
            }
        }

        [JsiiTypeProxy(nativeType: typeof(IStackProps), fullyQualifiedName: "@alicloud/ros-cdk-core.StackProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IStackProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>A description of the stack.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - No description.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            [JsiiOptional]
            [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
            public bool? EnableResourcePropertyConstraint
            {
                get => GetInstanceProperty<bool?>();
            }

            [JsiiOptional]
            [JsiiProperty(name: "metadata", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>? Metadata
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>?>();
            }

            /// <summary>Name to deploy the stack with.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - Derived from construct path.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "stackName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? StackName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Synthesis method to use while deploying this stack.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - `DefaultStackSynthesizer`
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "synthesizer", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IStackSynthesizer\"}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Core.IStackSynthesizer? Synthesizer
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IStackSynthesizer?>();
            }

            /// <summary>Stack tags that will be applied to all the taggable resources and the stack itself.</summary>
            /// <remarks>
            /// <strong>Default</strong>: {}
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, string>? Tags
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, string>?>();
            }

            [JsiiOptional]
            [JsiiProperty(name: "version", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Version
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
