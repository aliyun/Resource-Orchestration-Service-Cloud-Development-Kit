using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Options to configure TagManager behavior.</summary>
    [JsiiInterface(nativeType: typeof(ITagManagerOptions), fullyQualifiedName: "@alicloud/ros-cdk-core.TagManagerOptions")]
    public interface ITagManagerOptions
    {
        /// <summary>The name of the property in ROS for these tags&#xD; &#xD; Normally this is `tags`, but Cognito UserPool uses UserPoolTags.</summary>
        /// <remarks>
        /// <strong>Default</strong>: "tags"
        /// </remarks>
        [JsiiProperty(name: "tagPropertyName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? TagPropertyName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Options to configure TagManager behavior.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITagManagerOptions), fullyQualifiedName: "@alicloud/ros-cdk-core.TagManagerOptions")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.ITagManagerOptions
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>The name of the property in ROS for these tags&#xD; &#xD; Normally this is `tags`, but Cognito UserPool uses UserPoolTags.</summary>
            /// <remarks>
            /// <strong>Default</strong>: "tags"
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tagPropertyName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? TagPropertyName
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
