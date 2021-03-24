using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Construction properties for {@link Resource}.</summary>
    [JsiiInterface(nativeType: typeof(IResourceProps), fullyQualifiedName: "@alicloud/ros-cdk-core.ResourceProps")]
    public interface IResourceProps
    {
        /// <summary>The value passed in by users to the physical name prop of the resource.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description><c>undefined</c> implies that a physical name will be allocated during deployment.</description>
        /// <description>a concrete value implies a specific physical name</description>
        /// <description><c>PhysicalName.GENERATE_IF_NEEDED</c> is a marker that indicates that a physical will only be generated
        /// by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated.</description>
        /// </list>
        /// 
        /// <strong>Default</strong>: - The physical name will be allocated at deployment time
        /// </remarks>
        [JsiiProperty(name: "physicalName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PhysicalName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Construction properties for {@link Resource}.</summary>
        [JsiiTypeProxy(nativeType: typeof(IResourceProps), fullyQualifiedName: "@alicloud/ros-cdk-core.ResourceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IResourceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>The value passed in by users to the physical name prop of the resource.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description><c>undefined</c> implies that a physical name will be allocated during deployment.</description>
            /// <description>a concrete value implies a specific physical name</description>
            /// <description><c>PhysicalName.GENERATE_IF_NEEDED</c> is a marker that indicates that a physical will only be generated
            /// by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated.</description>
            /// </list>
            /// 
            /// <strong>Default</strong>: - The physical name will be allocated at deployment time
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "physicalName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PhysicalName
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
