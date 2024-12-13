using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Paiplugin
{
    /// <summary>Properties for defining a `Template`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-template
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ITemplateProps), fullyQualifiedName: "@alicloud/ros-cdk-paiplugin.TemplateProps")]
    public interface ITemplateProps
    {
        /// <summary>Property content: The content of the template.</summary>
        [JsiiProperty(name: "content", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Content
        {
            get;
        }

        /// <summary>Property description: For the template content, please keep the total word count within 70 words.</summary>
        /// <remarks>
        /// The excess will be charged as long text messages. Each text message is recorded as 67 words.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Description
        {
            get;
        }

        /// <summary>Property name: The name of the template.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property type: The type of the template.</summary>
        /// <remarks>
        /// The following values are supported:
        /// 0: Verification code.
        /// 1: SMS notification.
        /// 2: Promotional SMS.
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Type
        {
            get;
        }

        /// <summary>Property signature: The name of the Signature, You must select either Signature or SignatureId, but not both.</summary>
        [JsiiProperty(name: "signature", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Signature
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property signatureId: The ID of the Signature, You must select either Signature or SignatureId, but not both.</summary>
        [JsiiProperty(name: "signatureId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SignatureId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Template`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-template
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ITemplateProps), fullyQualifiedName: "@alicloud/ros-cdk-paiplugin.TemplateProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Paiplugin.ITemplateProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property content: The content of the template.</summary>
            [JsiiProperty(name: "content", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Content
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: For the template content, please keep the total word count within 70 words.</summary>
            /// <remarks>
            /// The excess will be charged as long text messages. Each text message is recorded as 67 words.
            /// </remarks>
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Description
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: The name of the template.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property type: The type of the template.</summary>
            /// <remarks>
            /// The following values are supported:
            /// 0: Verification code.
            /// 1: SMS notification.
            /// 2: Promotional SMS.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Type
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property signature: The name of the Signature, You must select either Signature or SignatureId, but not both.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "signature", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Signature
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property signatureId: The ID of the Signature, You must select either Signature or SignatureId, but not both.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "signatureId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SignatureId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
