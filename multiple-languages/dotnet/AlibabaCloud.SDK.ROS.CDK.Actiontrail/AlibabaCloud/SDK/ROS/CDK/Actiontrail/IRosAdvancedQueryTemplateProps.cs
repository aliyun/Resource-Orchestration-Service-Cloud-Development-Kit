using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Actiontrail
{
    /// <summary>Properties for defining a `RosAdvancedQueryTemplate`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-advancedquerytemplate
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAdvancedQueryTemplateProps), fullyQualifiedName: "@alicloud/ros-cdk-actiontrail.RosAdvancedQueryTemplateProps")]
    public interface IRosAdvancedQueryTemplateProps
    {
        /// <remarks>
        /// <strong>Property</strong>: simpleQuery: Indicates whether the template is a simple query.
        /// </remarks>
        [JsiiProperty(name: "simpleQuery", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SimpleQuery
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: templateSql: The SQL statement of the advanced query template.
        /// </remarks>
        [JsiiProperty(name: "templateSql", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TemplateSql
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: templateName: The name of the advanced query template.
        /// </remarks>
        [JsiiProperty(name: "templateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TemplateName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosAdvancedQueryTemplate`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-advancedquerytemplate
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAdvancedQueryTemplateProps), fullyQualifiedName: "@alicloud/ros-cdk-actiontrail.RosAdvancedQueryTemplateProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Actiontrail.IRosAdvancedQueryTemplateProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: simpleQuery: Indicates whether the template is a simple query.
            /// </remarks>
            [JsiiProperty(name: "simpleQuery", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SimpleQuery
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: templateSql: The SQL statement of the advanced query template.
            /// </remarks>
            [JsiiProperty(name: "templateSql", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TemplateSql
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: templateName: The name of the advanced query template.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "templateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TemplateName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
