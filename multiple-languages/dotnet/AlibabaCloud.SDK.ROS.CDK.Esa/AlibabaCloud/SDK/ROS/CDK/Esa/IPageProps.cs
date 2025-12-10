using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `Page`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-page
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IPageProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.PageProps")]
    public interface IPageProps
    {
        /// <summary>Property contentType: The Content-Type field in the HTTP header.</summary>
        /// <remarks>
        /// Valid values:
        /// text/html
        /// application/json
        /// </remarks>
        [JsiiProperty(name: "contentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ContentType
        {
            get;
        }

        /// <summary>Property pageName: The name of the custom response page.</summary>
        [JsiiProperty(name: "pageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PageName
        {
            get;
        }

        /// <summary>Property content: The Base64-encoded page content.</summary>
        /// <remarks>
        /// Example: "PGh0bWw+aGVsbG8gcGFnZTwvaHRtbD4=", which indicates "hello page".
        /// </remarks>
        [JsiiProperty(name: "content", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Content
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the page.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Page`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-page
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IPageProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.PageProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IPageProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property contentType: The Content-Type field in the HTTP header.</summary>
            /// <remarks>
            /// Valid values:
            /// text/html
            /// application/json
            /// </remarks>
            [JsiiProperty(name: "contentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ContentType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property pageName: The name of the custom response page.</summary>
            [JsiiProperty(name: "pageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PageName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property content: The Base64-encoded page content.</summary>
            /// <remarks>
            /// Example: "PGh0bWw+aGVsbG8gcGFnZTwvaHRtbD4=", which indicates "hello page".
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "content", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Content
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the page.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
