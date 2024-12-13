using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Aligreen
{
    /// <summary>Properties for defining a `BizType`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-biztype
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IBizTypeProps), fullyQualifiedName: "@alicloud/ros-cdk-aligreen.BizTypeProps")]
    public interface IBizTypeProps
    {
        /// <summary>Property bizTypeName: The name of the business scenario defined by the customer.</summary>
        /// <remarks>
        /// It can contain no more than 32 characters in English, numbers, and underscores.
        /// </remarks>
        [JsiiProperty(name: "bizTypeName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BizTypeName
        {
            get;
        }

        /// <summary>Property citeTemplate: Specifies whether to import the configuration of an industry template.</summary>
        /// <remarks>
        /// Default value: false. Valid values:
        /// true: imports the configuration of an industry template.
        /// false: does not import the configuration of an industry template. If the value is true, you must specify the industryInfo parameter.
        /// </remarks>
        [JsiiProperty(name: "citeTemplate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CiteTemplate
        {
            get;
        }

        /// <summary>Property bizTypeImport: The name of the existing business scenario that was imported from when the business scenario was created.</summary>
        [JsiiProperty(name: "bizTypeImport", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BizTypeImport
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the business scenario defined by the customer, which is a combination of Chinese and English, numbers, and underscores, and cannot exceed 32 characters.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property industryInfo: The industry classification.</summary>
        /// <remarks>
        /// For specific types see <a href="https:\/\/help.aliyun.com\/document_detail\/210982.html" target="_blank" xmlns="http://www.w3.org/1999/xhtml"></a>CreateBizType.
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

        /// <summary>Properties for defining a `BizType`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-biztype
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IBizTypeProps), fullyQualifiedName: "@alicloud/ros-cdk-aligreen.BizTypeProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Aligreen.IBizTypeProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property bizTypeName: The name of the business scenario defined by the customer.</summary>
            /// <remarks>
            /// It can contain no more than 32 characters in English, numbers, and underscores.
            /// </remarks>
            [JsiiProperty(name: "bizTypeName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BizTypeName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property citeTemplate: Specifies whether to import the configuration of an industry template.</summary>
            /// <remarks>
            /// Default value: false. Valid values:
            /// true: imports the configuration of an industry template.
            /// false: does not import the configuration of an industry template. If the value is true, you must specify the industryInfo parameter.
            /// </remarks>
            [JsiiProperty(name: "citeTemplate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CiteTemplate
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property bizTypeImport: The name of the existing business scenario that was imported from when the business scenario was created.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "bizTypeImport", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BizTypeImport
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the business scenario defined by the customer, which is a combination of Chinese and English, numbers, and underscores, and cannot exceed 32 characters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property industryInfo: The industry classification.</summary>
            /// <remarks>
            /// For specific types see <a href="https:\/\/help.aliyun.com\/document_detail\/210982.html" target="_blank" xmlns="http://www.w3.org/1999/xhtml"></a>CreateBizType.
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
