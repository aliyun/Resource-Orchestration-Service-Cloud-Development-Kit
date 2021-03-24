using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos
{
    /// <summary>Properties for defining a `ALIYUN::OOS::Template`.</summary>
    [JsiiInterface(nativeType: typeof(ITemplateProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.TemplateProps")]
    public interface ITemplateProps
    {
        /// <summary>Property content: The content of the template.</summary>
        /// <remarks>
        /// The template must be in the JSON or YAML format. Maximum size: 64 KB.
        /// </remarks>
        [JsiiProperty(name: "content", typeJson: "{\"primitive\":\"string\"}")]
        string Content
        {
            get;
        }

        /// <summary>Property templateName: The name of the template.</summary>
        /// <remarks>
        /// The template name can be up to 200 characters in length. The name can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, or ALICLOUD.
        /// </remarks>
        [JsiiProperty(name: "templateName", typeJson: "{\"primitive\":\"string\"}")]
        string TemplateName
        {
            get;
        }

        /// <summary>Property tags: Tag value and the key mapping, the label of the key number can be up to 20.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::OOS::Template`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITemplateProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.TemplateProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oos.ITemplateProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property content: The content of the template.</summary>
            /// <remarks>
            /// The template must be in the JSON or YAML format. Maximum size: 64 KB.
            /// </remarks>
            [JsiiProperty(name: "content", typeJson: "{\"primitive\":\"string\"}")]
            public string Content
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property templateName: The name of the template.</summary>
            /// <remarks>
            /// The template name can be up to 200 characters in length. The name can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, or ALICLOUD.
            /// </remarks>
            [JsiiProperty(name: "templateName", typeJson: "{\"primitive\":\"string\"}")]
            public string TemplateName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property tags: Tag value and the key mapping, the label of the key number can be up to 20.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>[]? Tags
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>[]?>();
            }
        }
    }
}
