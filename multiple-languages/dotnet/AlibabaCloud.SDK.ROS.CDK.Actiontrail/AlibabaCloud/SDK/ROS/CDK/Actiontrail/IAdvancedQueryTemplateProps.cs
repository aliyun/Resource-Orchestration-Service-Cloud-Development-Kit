using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Actiontrail
{
    /// <summary>Properties for defining a `AdvancedQueryTemplate`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-advancedquerytemplate
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAdvancedQueryTemplateProps), fullyQualifiedName: "@alicloud/ros-cdk-actiontrail.AdvancedQueryTemplateProps")]
    public interface IAdvancedQueryTemplateProps
    {
        /// <summary>Property simpleQuery: Indicates whether the template is a simple query.</summary>
        [JsiiProperty(name: "simpleQuery", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SimpleQuery
        {
            get;
        }

        /// <summary>Property templateSql: The SQL statement of the advanced query template.</summary>
        [JsiiProperty(name: "templateSql", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TemplateSql
        {
            get;
        }

        /// <summary>Property templateName: The name of the advanced query template.</summary>
        [JsiiProperty(name: "templateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TemplateName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `AdvancedQueryTemplate`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-advancedquerytemplate
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAdvancedQueryTemplateProps), fullyQualifiedName: "@alicloud/ros-cdk-actiontrail.AdvancedQueryTemplateProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Actiontrail.IAdvancedQueryTemplateProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property simpleQuery: Indicates whether the template is a simple query.</summary>
            [JsiiProperty(name: "simpleQuery", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SimpleQuery
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property templateSql: The SQL statement of the advanced query template.</summary>
            [JsiiProperty(name: "templateSql", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TemplateSql
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property templateName: The name of the advanced query template.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "templateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TemplateName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
