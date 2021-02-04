package com.aliyun.ros.cdk.dts;

/**
 * A ROS resource type:  `ALIYUN::DTS::SynchronizationJob`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:35.476Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.SynchronizationJob")
public class SynchronizationJob extends com.aliyun.ros.cdk.core.Resource {

    protected SynchronizationJob(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SynchronizationJob(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::DTS::SynchronizationJob`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public SynchronizationJob(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.SynchronizationJobProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::DTS::SynchronizationJob`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     */
    public SynchronizationJob(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.SynchronizationJobProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSynchronizationJobId() {
        return software.amazon.jsii.Kernel.get(this, "attrSynchronizationJobId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dts.SynchronizationJob}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dts.SynchronizationJob> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.dts.SynchronizationJobProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dts.SynchronizationJobProps.Builder();
        }

        /**
         * @return {@code this}
         * @param destinationEndpoint This parameter is required.
         */
        public Builder destinationEndpoint(final com.aliyun.ros.cdk.dts.RosSynchronizationJob.DestinationEndpointProperty destinationEndpoint) {
            this.props.destinationEndpoint(destinationEndpoint);
            return this;
        }
        /**
         * @return {@code this}
         * @param destinationEndpoint This parameter is required.
         */
        public Builder destinationEndpoint(final com.aliyun.ros.cdk.core.IResolvable destinationEndpoint) {
            this.props.destinationEndpoint(destinationEndpoint);
            return this;
        }

        /**
         * @return {@code this}
         * @param destRegion This parameter is required.
         */
        public Builder destRegion(final java.lang.String destRegion) {
            this.props.destRegion(destRegion);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceEndpoint This parameter is required.
         */
        public Builder sourceEndpoint(final com.aliyun.ros.cdk.core.IResolvable sourceEndpoint) {
            this.props.sourceEndpoint(sourceEndpoint);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceEndpoint This parameter is required.
         */
        public Builder sourceEndpoint(final com.aliyun.ros.cdk.dts.RosSynchronizationJob.SourceEndpointProperty sourceEndpoint) {
            this.props.sourceEndpoint(sourceEndpoint);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceRegion This parameter is required.
         */
        public Builder sourceRegion(final java.lang.String sourceRegion) {
            this.props.sourceRegion(sourceRegion);
            return this;
        }

        /**
         * @return {@code this}
         * @param synchronizationJobClass This parameter is required.
         */
        public Builder synchronizationJobClass(final java.lang.String synchronizationJobClass) {
            this.props.synchronizationJobClass(synchronizationJobClass);
            return this;
        }

        /**
         * @return {@code this}
         * @param dataInitialization This parameter is required.
         */
        public Builder dataInitialization(final java.lang.Boolean dataInitialization) {
            this.props.dataInitialization(dataInitialization);
            return this;
        }
        /**
         * @return {@code this}
         * @param dataInitialization This parameter is required.
         */
        public Builder dataInitialization(final com.aliyun.ros.cdk.core.IResolvable dataInitialization) {
            this.props.dataInitialization(dataInitialization);
            return this;
        }

        /**
         * @return {@code this}
         * @param networkType This parameter is required.
         */
        public Builder networkType(final java.lang.String networkType) {
            this.props.networkType(networkType);
            return this;
        }

        /**
         * @return {@code this}
         * @param payType This parameter is required.
         */
        public Builder payType(final java.lang.String payType) {
            this.props.payType(payType);
            return this;
        }

        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final java.lang.String period) {
            this.props.period(period);
            return this;
        }

        /**
         * @return {@code this}
         * @param structureInitialization This parameter is required.
         */
        public Builder structureInitialization(final java.lang.Boolean structureInitialization) {
            this.props.structureInitialization(structureInitialization);
            return this;
        }
        /**
         * @return {@code this}
         * @param structureInitialization This parameter is required.
         */
        public Builder structureInitialization(final com.aliyun.ros.cdk.core.IResolvable structureInitialization) {
            this.props.structureInitialization(structureInitialization);
            return this;
        }

        /**
         * @return {@code this}
         * @param synchronizationObjects This parameter is required.
         */
        public Builder synchronizationObjects(final com.aliyun.ros.cdk.core.IResolvable synchronizationObjects) {
            this.props.synchronizationObjects(synchronizationObjects);
            return this;
        }
        /**
         * @return {@code this}
         * @param synchronizationObjects This parameter is required.
         */
        public Builder synchronizationObjects(final java.util.List<? extends java.lang.Object> synchronizationObjects) {
            this.props.synchronizationObjects(synchronizationObjects);
            return this;
        }

        /**
         * @return {@code this}
         * @param topology This parameter is required.
         */
        public Builder topology(final java.lang.String topology) {
            this.props.topology(topology);
            return this;
        }

        /**
         * @return {@code this}
         * @param usedTime This parameter is required.
         */
        public Builder usedTime(final java.lang.Number usedTime) {
            this.props.usedTime(usedTime);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.dts.SynchronizationJob}.
         */
        @Override
        public com.aliyun.ros.cdk.dts.SynchronizationJob build() {
            return new com.aliyun.ros.cdk.dts.SynchronizationJob(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
