using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Devops
{
    /// <summary>Properties for defining a `RosPipelineRelations`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipelinerelations
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosPipelineRelationsProps), fullyQualifiedName: "@alicloud/ros-cdk-devops.RosPipelineRelationsProps")]
    public interface IRosPipelineRelationsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
        /// </remarks>
        [JsiiProperty(name: "organizationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OrganizationId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: pipelineId: The pipeline ID, which can be obtained from the pipeline link.
        /// </remarks>
        [JsiiProperty(name: "pipelineId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PipelineId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: relObjectIds: Ids of the associated resource. For now, only variable group ids are supported.
        /// </remarks>
        [JsiiProperty(name: "relObjectIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object RelObjectIds
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: relObjectType: Associated resource type. Valid values:
        /// - VARIABLE_GROUP
        /// - OOS_APP_ID
        /// For now, only VARIABLE GROUP is supported.
        /// </remarks>
        [JsiiProperty(name: "relObjectType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RelObjectType
        {
            get;
        }

        /// <summary>Properties for defining a `RosPipelineRelations`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipelinerelations
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosPipelineRelationsProps), fullyQualifiedName: "@alicloud/ros-cdk-devops.RosPipelineRelationsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Devops.IRosPipelineRelationsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
            /// </remarks>
            [JsiiProperty(name: "organizationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OrganizationId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: pipelineId: The pipeline ID, which can be obtained from the pipeline link.
            /// </remarks>
            [JsiiProperty(name: "pipelineId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PipelineId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: relObjectIds: Ids of the associated resource. For now, only variable group ids are supported.
            /// </remarks>
            [JsiiProperty(name: "relObjectIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object RelObjectIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: relObjectType: Associated resource type. Valid values:
            /// - VARIABLE_GROUP
            /// - OOS_APP_ID
            /// For now, only VARIABLE GROUP is supported.
            /// </remarks>
            [JsiiProperty(name: "relObjectType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RelObjectType
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
