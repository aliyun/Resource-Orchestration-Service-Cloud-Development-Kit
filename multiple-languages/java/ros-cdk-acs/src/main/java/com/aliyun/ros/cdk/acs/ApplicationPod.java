package com.aliyun.ros.cdk.acs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ACS::ApplicationPod</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:44.859Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.acs.$Module.class, fqn = "@alicloud/ros-cdk-acs.ApplicationPod")
public class ApplicationPod extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.acs.IApplicationPod {

    protected ApplicationPod(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ApplicationPod(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public ApplicationPod(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.acs.ApplicationPodProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ApplicationPod(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.acs.ApplicationPodProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.acs.ApplicationPodProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.acs.ApplicationPodProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.acs.ApplicationPod}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.acs.ApplicationPod> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.acs.ApplicationPodProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.acs.ApplicationPodProps.Builder();
        }

        /**
         * Property computeClass: Compute class of the application pod.
         * <p>
         * @return {@code this}
         * @param computeClass Property computeClass: Compute class of the application pod. This parameter is required.
         */
        public Builder computeClass(final java.lang.String computeClass) {
            this.props.computeClass(computeClass);
            return this;
        }
        /**
         * Property computeClass: Compute class of the application pod.
         * <p>
         * @return {@code this}
         * @param computeClass Property computeClass: Compute class of the application pod. This parameter is required.
         */
        public Builder computeClass(final com.aliyun.ros.cdk.core.IResolvable computeClass) {
            this.props.computeClass(computeClass);
            return this;
        }

        /**
         * Property computeQos: Compute QoS of the application pod.
         * <p>
         * @return {@code this}
         * @param computeQos Property computeQos: Compute QoS of the application pod. This parameter is required.
         */
        public Builder computeQos(final java.lang.String computeQos) {
            this.props.computeQos(computeQos);
            return this;
        }
        /**
         * Property computeQos: Compute QoS of the application pod.
         * <p>
         * @return {@code this}
         * @param computeQos Property computeQos: Compute QoS of the application pod. This parameter is required.
         */
        public Builder computeQos(final com.aliyun.ros.cdk.core.IResolvable computeQos) {
            this.props.computeQos(computeQos);
            return this;
        }

        /**
         * Property cpuCoreNumber: CPU core number required by the container.
         * <p>
         * @return {@code this}
         * @param cpuCoreNumber Property cpuCoreNumber: CPU core number required by the container. This parameter is required.
         */
        public Builder cpuCoreNumber(final java.lang.String cpuCoreNumber) {
            this.props.cpuCoreNumber(cpuCoreNumber);
            return this;
        }
        /**
         * Property cpuCoreNumber: CPU core number required by the container.
         * <p>
         * @return {@code this}
         * @param cpuCoreNumber Property cpuCoreNumber: CPU core number required by the container. This parameter is required.
         */
        public Builder cpuCoreNumber(final com.aliyun.ros.cdk.core.IResolvable cpuCoreNumber) {
            this.props.cpuCoreNumber(cpuCoreNumber);
            return this;
        }

        /**
         * Property image: Container image for the application pod.
         * <p>
         * @return {@code this}
         * @param image Property image: Container image for the application pod. This parameter is required.
         */
        public Builder image(final java.lang.String image) {
            this.props.image(image);
            return this;
        }
        /**
         * Property image: Container image for the application pod.
         * <p>
         * @return {@code this}
         * @param image Property image: Container image for the application pod. This parameter is required.
         */
        public Builder image(final com.aliyun.ros.cdk.core.IResolvable image) {
            this.props.image(image);
            return this;
        }

        /**
         * Property kind: Kind of the application pod (Job, CronJob, Deployment, StatefulSet).
         * <p>
         * @return {@code this}
         * @param kind Property kind: Kind of the application pod (Job, CronJob, Deployment, StatefulSet). This parameter is required.
         */
        public Builder kind(final java.lang.String kind) {
            this.props.kind(kind);
            return this;
        }
        /**
         * Property kind: Kind of the application pod (Job, CronJob, Deployment, StatefulSet).
         * <p>
         * @return {@code this}
         * @param kind Property kind: Kind of the application pod (Job, CronJob, Deployment, StatefulSet). This parameter is required.
         */
        public Builder kind(final com.aliyun.ros.cdk.core.IResolvable kind) {
            this.props.kind(kind);
            return this;
        }

        /**
         * Property memory: Memory size (in GB) required by the container.
         * <p>
         * @return {@code this}
         * @param memory Property memory: Memory size (in GB) required by the container. This parameter is required.
         */
        public Builder memory(final java.lang.Number memory) {
            this.props.memory(memory);
            return this;
        }
        /**
         * Property memory: Memory size (in GB) required by the container.
         * <p>
         * @return {@code this}
         * @param memory Property memory: Memory size (in GB) required by the container. This parameter is required.
         */
        public Builder memory(final com.aliyun.ros.cdk.core.IResolvable memory) {
            this.props.memory(memory);
            return this;
        }

        /**
         * Property diskConfig: Disk configurations for the application pod.
         * <p>
         * @return {@code this}
         * @param diskConfig Property diskConfig: Disk configurations for the application pod. This parameter is required.
         */
        public Builder diskConfig(final com.aliyun.ros.cdk.core.IResolvable diskConfig) {
            this.props.diskConfig(diskConfig);
            return this;
        }
        /**
         * Property diskConfig: Disk configurations for the application pod.
         * <p>
         * @return {@code this}
         * @param diskConfig Property diskConfig: Disk configurations for the application pod. This parameter is required.
         */
        public Builder diskConfig(final com.aliyun.ros.cdk.acs.RosApplicationPod.DiskConfigProperty diskConfig) {
            this.props.diskConfig(diskConfig);
            return this;
        }

        /**
         * Property gpuCoreNumber: GPU core number, if using GPU.
         * <p>
         * @return {@code this}
         * @param gpuCoreNumber Property gpuCoreNumber: GPU core number, if using GPU. This parameter is required.
         */
        public Builder gpuCoreNumber(final java.lang.Number gpuCoreNumber) {
            this.props.gpuCoreNumber(gpuCoreNumber);
            return this;
        }
        /**
         * Property gpuCoreNumber: GPU core number, if using GPU.
         * <p>
         * @return {@code this}
         * @param gpuCoreNumber Property gpuCoreNumber: GPU core number, if using GPU. This parameter is required.
         */
        public Builder gpuCoreNumber(final com.aliyun.ros.cdk.core.IResolvable gpuCoreNumber) {
            this.props.gpuCoreNumber(gpuCoreNumber);
            return this;
        }

        /**
         * Property gpuModelSeries: GPU model series, if using GPU.
         * <p>
         * @return {@code this}
         * @param gpuModelSeries Property gpuModelSeries: GPU model series, if using GPU. This parameter is required.
         */
        public Builder gpuModelSeries(final java.lang.String gpuModelSeries) {
            this.props.gpuModelSeries(gpuModelSeries);
            return this;
        }
        /**
         * Property gpuModelSeries: GPU model series, if using GPU.
         * <p>
         * @return {@code this}
         * @param gpuModelSeries Property gpuModelSeries: GPU model series, if using GPU. This parameter is required.
         */
        public Builder gpuModelSeries(final com.aliyun.ros.cdk.core.IResolvable gpuModelSeries) {
            this.props.gpuModelSeries(gpuModelSeries);
            return this;
        }

        /**
         * Property gpuType: GPU type, default is nvidia.com/gpu.
         * <p>
         * @return {@code this}
         * @param gpuType Property gpuType: GPU type, default is nvidia.com/gpu. This parameter is required.
         */
        public Builder gpuType(final java.lang.String gpuType) {
            this.props.gpuType(gpuType);
            return this;
        }
        /**
         * Property gpuType: GPU type, default is nvidia.com/gpu.
         * <p>
         * @return {@code this}
         * @param gpuType Property gpuType: GPU type, default is nvidia.com/gpu. This parameter is required.
         */
        public Builder gpuType(final com.aliyun.ros.cdk.core.IResolvable gpuType) {
            this.props.gpuType(gpuType);
            return this;
        }

        /**
         * Property replicas: Number of replicas for Deployment or StatefulSet.
         * <p>
         * @return {@code this}
         * @param replicas Property replicas: Number of replicas for Deployment or StatefulSet. This parameter is required.
         */
        public Builder replicas(final java.lang.Number replicas) {
            this.props.replicas(replicas);
            return this;
        }
        /**
         * Property replicas: Number of replicas for Deployment or StatefulSet.
         * <p>
         * @return {@code this}
         * @param replicas Property replicas: Number of replicas for Deployment or StatefulSet. This parameter is required.
         */
        public Builder replicas(final com.aliyun.ros.cdk.core.IResolvable replicas) {
            this.props.replicas(replicas);
            return this;
        }

        /**
         * Property zoneId: Zone ID for the application pod.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: Zone ID for the application pod. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: Zone ID for the application pod.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: Zone ID for the application pod. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.acs.ApplicationPod}.
         */
        @Override
        public com.aliyun.ros.cdk.acs.ApplicationPod build() {
            return new com.aliyun.ros.cdk.acs.ApplicationPod(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
