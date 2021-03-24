using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>ROS template options for a stack.</summary>
    [JsiiInterface(nativeType: typeof(ITemplateOptions), fullyQualifiedName: "@alicloud/ros-cdk-core.ITemplateOptions")]
    public interface ITemplateOptions
    {
        /// <summary>Gets or sets the description of this stack.</summary>
        /// <remarks>
        /// If provided, it will be included in the ROS template's "Description" attribute.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
            set
            {
                throw new System.NotSupportedException("'set' for 'Description' is not implemented");
            }
        }

        /// <summary>Metadata associated with the ROS template.</summary>
        [JsiiProperty(name: "metadata", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, object>? Metadata
        {
            get
            {
                return null;
            }
            set
            {
                throw new System.NotSupportedException("'set' for 'Metadata' is not implemented");
            }
        }

        /// <summary>ROS template options for a stack.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITemplateOptions), fullyQualifiedName: "@alicloud/ros-cdk-core.ITemplateOptions")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.ITemplateOptions
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Gets or sets the description of this stack.</summary>
            /// <remarks>
            /// If provided, it will be included in the ROS template's "Description" attribute.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
                set => SetInstanceProperty(value);
            }

            /// <summary>Metadata associated with the ROS template.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "metadata", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>? Metadata
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>?>();
                set => SetInstanceProperty(value);
            }
        }
    }
}
