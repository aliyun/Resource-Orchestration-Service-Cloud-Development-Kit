using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>An intrinsic Token that represents a reference to a construct.</summary>
    /// <remarks>
    /// References are recorded.
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.Reference), fullyQualifiedName: "@alicloud/ros-cdk-core.Reference", parametersJson: "[{\"name\":\"value\",\"type\":{\"primitive\":\"any\"}},{\"name\":\"target\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IConstruct\"}},{\"name\":\"displayName\",\"optional\":true,\"type\":{\"primitive\":\"string\"}}]")]
    public abstract class Reference : AlibabaCloud.SDK.ROS.CDK.Core.Intrinsic
    {
        protected Reference(object @value, AlibabaCloud.SDK.ROS.CDK.Core.IConstruct target, string? displayName = null): base(_MakeDeputyProps(@value, target, displayName))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(object @value, AlibabaCloud.SDK.ROS.CDK.Core.IConstruct target, string? displayName = null)
        {
            return new DeputyProps(new object?[]{@value, target, displayName});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Reference(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Reference(DeputyProps props): base(props)
        {
        }

        /// <summary>Check whether this is actually a Reference.</summary>
        [JsiiMethod(name: "isReference", returnsJson: "{\"type\":{\"primitive\":\"boolean\"}}", parametersJson: "[{\"name\":\"x\",\"type\":{\"primitive\":\"any\"}}]")]
        public static bool IsReference(object x)
        {
            return InvokeStaticMethod<bool>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Reference), new System.Type[]{typeof(object)}, new object[]{x})!;
        }

        [JsiiProperty(name: "displayName", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string DisplayName
        {
            get => GetInstanceProperty<string>()!;
        }

        [JsiiProperty(name: "target", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IConstruct\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IConstruct Target
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IConstruct>()!;
        }

        /// <summary>An intrinsic Token that represents a reference to a construct.</summary>
        /// <remarks>
        /// References are recorded.
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.Reference), fullyQualifiedName: "@alicloud/ros-cdk-core.Reference")]
        internal sealed class _Proxy : AlibabaCloud.SDK.ROS.CDK.Core.Reference
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }
        }
    }
}
