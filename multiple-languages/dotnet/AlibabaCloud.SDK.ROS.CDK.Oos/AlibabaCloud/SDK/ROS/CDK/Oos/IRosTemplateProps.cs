using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos
{
    /// <summary>Properties for defining a `ALIYUN::OOS::Template`.</summary>
    [JsiiInterface(nativeType: typeof(IRosTemplateProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.RosTemplateProps")]
    public interface IRosTemplateProps
    {
        /// <remarks>
        /// <strong>Property</strong>: content: The content of the template. The template must be in the JSON or YAML format. Maximum size: 64 KB.
        /// </remarks>
        [JsiiProperty(name: "content", typeJson: "{\"primitive\":\"string\"}")]
        string Content
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: templateName: The name of the template. The template name can be up to 200 characters in length. The name can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, or ALICLOUD.
        /// </remarks>
        [JsiiProperty(name: "templateName", typeJson: "{\"primitive\":\"string\"}")]
        string TemplateName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tag value and the key mapping, the label of the key number can be up to 20.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::OOS::Template`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosTemplateProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.RosTemplateProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oos.IRosTemplateProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: content: The content of the template. The template must be in the JSON or YAML format. Maximum size: 64 KB.
            /// </remarks>
            [JsiiProperty(name: "content", typeJson: "{\"primitive\":\"string\"}")]
            public string Content
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: templateName: The name of the template. The template name can be up to 200 characters in length. The name can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, or ALICLOUD.
            /// </remarks>
            [JsiiProperty(name: "templateName", typeJson: "{\"primitive\":\"string\"}")]
            public string TemplateName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tag value and the key mapping, the label of the key number can be up to 20.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]?>();
            }
        }
    }
}
