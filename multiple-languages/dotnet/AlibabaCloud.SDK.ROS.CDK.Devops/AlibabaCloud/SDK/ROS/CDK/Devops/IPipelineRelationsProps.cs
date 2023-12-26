using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Devops
{
    /// <summary>Properties for defining a `PipelineRelations`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipelinerelations
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IPipelineRelationsProps), fullyQualifiedName: "@alicloud/ros-cdk-devops.PipelineRelationsProps")]
    public interface IPipelineRelationsProps
    {
        /// <summary>Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.</summary>
        [JsiiProperty(name: "organizationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OrganizationId
        {
            get;
        }

        /// <summary>Property pipelineId: The pipeline ID, which can be obtained from the pipeline link.</summary>
        [JsiiProperty(name: "pipelineId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PipelineId
        {
            get;
        }

        /// <summary>Property relObjectIds: Ids of the associated resource.</summary>
        /// <remarks>
        /// For now, only variable group ids are supported.
        /// </remarks>
        [JsiiProperty(name: "relObjectIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object RelObjectIds
        {
            get;
        }

        /// <summary>Property relObjectType: Associated resource type.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>VARIABLE_GROUP</description>
        /// <description>OOS_APP_ID
        /// For now, only VARIABLE GROUP is supported.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "relObjectType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RelObjectType
        {
            get;
        }

        /// <summary>Properties for defining a `PipelineRelations`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipelinerelations
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IPipelineRelationsProps), fullyQualifiedName: "@alicloud/ros-cdk-devops.PipelineRelationsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Devops.IPipelineRelationsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.</summary>
            [JsiiProperty(name: "organizationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OrganizationId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property pipelineId: The pipeline ID, which can be obtained from the pipeline link.</summary>
            [JsiiProperty(name: "pipelineId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PipelineId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property relObjectIds: Ids of the associated resource.</summary>
            /// <remarks>
            /// For now, only variable group ids are supported.
            /// </remarks>
            [JsiiProperty(name: "relObjectIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object RelObjectIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property relObjectType: Associated resource type.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>VARIABLE_GROUP</description>
            /// <description>OOS_APP_ID
            /// For now, only VARIABLE GROUP is supported.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "relObjectType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RelObjectType
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
