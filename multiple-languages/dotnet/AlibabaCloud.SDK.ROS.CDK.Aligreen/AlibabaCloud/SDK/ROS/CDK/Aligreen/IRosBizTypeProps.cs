using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Aligreen
{
    /// <summary>Properties for defining a `RosBizType`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-biztype
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosBizTypeProps), fullyQualifiedName: "@alicloud/ros-cdk-aligreen.RosBizTypeProps")]
    public interface IRosBizTypeProps
    {
        /// <remarks>
        /// <strong>Property</strong>: bizTypeName: The name of the business scenario defined by the customer. It can contain no more than 32 characters in English, numbers, and underscores.
        /// </remarks>
        [JsiiProperty(name: "bizTypeName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BizTypeName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: citeTemplate: Specifies whether to import the configuration of an industry template. Default value: false. Valid values:
        /// true: imports the configuration of an industry template.
        /// false: does not import the configuration of an industry template. If the value is true, you must specify the industryInfo parameter.
        /// </remarks>
        [JsiiProperty(name: "citeTemplate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CiteTemplate
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: bizTypeImport: The name of the existing business scenario that was imported from when the business scenario was created.
        /// </remarks>
        [JsiiProperty(name: "bizTypeImport", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BizTypeImport
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the business scenario defined by the customer, which is a combination of Chinese and English, numbers, and underscores, and cannot exceed 32 characters.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: industryInfo: The industry classification. For specific types see <a href='https:\/\/help.aliyun.com\/document_detail\/210982.html' target='_blank'>CreateBizType<\/a>.
        /// </remarks>
        [JsiiProperty(name: "industryInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IndustryInfo
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosBizType`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-biztype
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosBizTypeProps), fullyQualifiedName: "@alicloud/ros-cdk-aligreen.RosBizTypeProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Aligreen.IRosBizTypeProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: bizTypeName: The name of the business scenario defined by the customer. It can contain no more than 32 characters in English, numbers, and underscores.
            /// </remarks>
            [JsiiProperty(name: "bizTypeName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BizTypeName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: citeTemplate: Specifies whether to import the configuration of an industry template. Default value: false. Valid values:
            /// true: imports the configuration of an industry template.
            /// false: does not import the configuration of an industry template. If the value is true, you must specify the industryInfo parameter.
            /// </remarks>
            [JsiiProperty(name: "citeTemplate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CiteTemplate
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: bizTypeImport: The name of the existing business scenario that was imported from when the business scenario was created.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bizTypeImport", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BizTypeImport
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the business scenario defined by the customer, which is a combination of Chinese and English, numbers, and underscores, and cannot exceed 32 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: industryInfo: The industry classification. For specific types see <a href='https:\/\/help.aliyun.com\/document_detail\/210982.html' target='_blank'>CreateBizType<\/a>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "industryInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IndustryInfo
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
