package com.aliyun.ros.cdk.dts;

/**
 * A ROS resource type:  `ALIYUN::DTS::SynchronizationJob`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.49.0 (build e322d87)", date = "2021-12-21T15:12:57.437Z")
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
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public SynchronizationJob(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.SynchronizationJobProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::DTS::SynchronizationJob`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public SynchronizationJob(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.SynchronizationJobProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute SynchronizationJobId: Synchronization instance ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSynchronizationJobId() {
        return software.amazon.jsii.Kernel.get(this, "attrSynchronizationJobId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dts.SynchronizationJob}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dts.SynchronizationJob> {
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
        private final com.aliyun.ros.cdk.dts.SynchronizationJobProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dts.SynchronizationJobProps.Builder();
        }

        /**
         * Property destinationEndpoint: Migration target configuration.
         * <p>
         * @return {@code this}
         * @param destinationEndpoint Property destinationEndpoint: Migration target configuration. This parameter is required.
         */
        public Builder destinationEndpoint(final com.aliyun.ros.cdk.core.IResolvable destinationEndpoint) {
            this.props.destinationEndpoint(destinationEndpoint);
            return this;
        }
        /**
         * Property destinationEndpoint: Migration target configuration.
         * <p>
         * @return {@code this}
         * @param destinationEndpoint Property destinationEndpoint: Migration target configuration. This parameter is required.
         */
        public Builder destinationEndpoint(final com.aliyun.ros.cdk.dts.RosSynchronizationJob.DestinationEndpointProperty destinationEndpoint) {
            this.props.destinationEndpoint(destinationEndpoint);
            return this;
        }

        /**
         * Property destRegion: Region where the synchronization target instance is located.
         * <p>
         * @return {@code this}
         * @param destRegion Property destRegion: Region where the synchronization target instance is located. This parameter is required.
         */
        public Builder destRegion(final java.lang.String destRegion) {
            this.props.destRegion(destRegion);
            return this;
        }
        /**
         * Property destRegion: Region where the synchronization target instance is located.
         * <p>
         * @return {@code this}
         * @param destRegion Property destRegion: Region where the synchronization target instance is located. This parameter is required.
         */
        public Builder destRegion(final com.aliyun.ros.cdk.core.IResolvable destRegion) {
            this.props.destRegion(destRegion);
            return this;
        }

        /**
         * Property sourceEndpoint: Migration source configuration.
         * <p>
         * @return {@code this}
         * @param sourceEndpoint Property sourceEndpoint: Migration source configuration. This parameter is required.
         */
        public Builder sourceEndpoint(final com.aliyun.ros.cdk.core.IResolvable sourceEndpoint) {
            this.props.sourceEndpoint(sourceEndpoint);
            return this;
        }
        /**
         * Property sourceEndpoint: Migration source configuration.
         * <p>
         * @return {@code this}
         * @param sourceEndpoint Property sourceEndpoint: Migration source configuration. This parameter is required.
         */
        public Builder sourceEndpoint(final com.aliyun.ros.cdk.dts.RosSynchronizationJob.SourceEndpointProperty sourceEndpoint) {
            this.props.sourceEndpoint(sourceEndpoint);
            return this;
        }

        /**
         * Property sourceRegion: Region where the synchronization source instance is located.
         * <p>
         * @return {@code this}
         * @param sourceRegion Property sourceRegion: Region where the synchronization source instance is located. This parameter is required.
         */
        public Builder sourceRegion(final java.lang.String sourceRegion) {
            this.props.sourceRegion(sourceRegion);
            return this;
        }
        /**
         * Property sourceRegion: Region where the synchronization source instance is located.
         * <p>
         * @return {@code this}
         * @param sourceRegion Property sourceRegion: Region where the synchronization source instance is located. This parameter is required.
         */
        public Builder sourceRegion(final com.aliyun.ros.cdk.core.IResolvable sourceRegion) {
            this.props.sourceRegion(sourceRegion);
            return this;
        }

        /**
         * Property synchronizationJobClass: Synchronous instance specifications, which can be: micro, small, medium, large and so on.
         * <p>
         * The default value is: small
         * <p>
         * @return {@code this}
         * @param synchronizationJobClass Property synchronizationJobClass: Synchronous instance specifications, which can be: micro, small, medium, large and so on. This parameter is required.
         */
        public Builder synchronizationJobClass(final java.lang.String synchronizationJobClass) {
            this.props.synchronizationJobClass(synchronizationJobClass);
            return this;
        }
        /**
         * Property synchronizationJobClass: Synchronous instance specifications, which can be: micro, small, medium, large and so on.
         * <p>
         * The default value is: small
         * <p>
         * @return {@code this}
         * @param synchronizationJobClass Property synchronizationJobClass: Synchronous instance specifications, which can be: micro, small, medium, large and so on. This parameter is required.
         */
        public Builder synchronizationJobClass(final com.aliyun.ros.cdk.core.IResolvable synchronizationJobClass) {
            this.props.synchronizationJobClass(synchronizationJobClass);
            return this;
        }

        /**
         * Property dataInitialization: Whether to perform full data initialization before synchronization.
         * <p>
         * The values include:true: means full data initialization
         * false: no full data initialization
         * The default value is: true
         * <p>
         * @return {@code this}
         * @param dataInitialization Property dataInitialization: Whether to perform full data initialization before synchronization. This parameter is required.
         */
        public Builder dataInitialization(final java.lang.Boolean dataInitialization) {
            this.props.dataInitialization(dataInitialization);
            return this;
        }
        /**
         * Property dataInitialization: Whether to perform full data initialization before synchronization.
         * <p>
         * The values include:true: means full data initialization
         * false: no full data initialization
         * The default value is: true
         * <p>
         * @return {@code this}
         * @param dataInitialization Property dataInitialization: Whether to perform full data initialization before synchronization. This parameter is required.
         */
        public Builder dataInitialization(final com.aliyun.ros.cdk.core.IResolvable dataInitialization) {
            this.props.dataInitialization(dataInitialization);
            return this;
        }

        /**
         * Property networkType: When synchronization geographies, the type of data transmission network used.
         * <p>
         * Value include: Internet, Intranet. The default value is: Internet
         * <p>
         * @return {@code this}
         * @param networkType Property networkType: When synchronization geographies, the type of data transmission network used. This parameter is required.
         */
        public Builder networkType(final java.lang.String networkType) {
            this.props.networkType(networkType);
            return this;
        }
        /**
         * Property networkType: When synchronization geographies, the type of data transmission network used.
         * <p>
         * Value include: Internet, Intranet. The default value is: Internet
         * <p>
         * @return {@code this}
         * @param networkType Property networkType: When synchronization geographies, the type of data transmission network used. This parameter is required.
         */
        public Builder networkType(final com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.props.networkType(networkType);
            return this;
        }

        /**
         * Property payType: Payment type, which include: Postpaid: postpaid type, Prepaid: Prepaid type.
         * <p>
         * Default is Postpaid
         * <p>
         * @return {@code this}
         * @param payType Property payType: Payment type, which include: Postpaid: postpaid type, Prepaid: Prepaid type. This parameter is required.
         */
        public Builder payType(final java.lang.String payType) {
            this.props.payType(payType);
            return this;
        }
        /**
         * Property payType: Payment type, which include: Postpaid: postpaid type, Prepaid: Prepaid type.
         * <p>
         * Default is Postpaid
         * <p>
         * @return {@code this}
         * @param payType Property payType: Payment type, which include: Postpaid: postpaid type, Prepaid: Prepaid type. This parameter is required.
         */
        public Builder payType(final com.aliyun.ros.cdk.core.IResolvable payType) {
            this.props.payType(payType);
            return this;
        }

        /**
         * Property period: If prepaid payment type, then the parameters specified in the purchase package instance or instances as examples of a monthly subscription, which can be: Year: Annual, Month: monthly.
         * <p>
         * @return {@code this}
         * @param period Property period: If prepaid payment type, then the parameters specified in the purchase package instance or instances as examples of a monthly subscription, which can be: Year: Annual, Month: monthly. This parameter is required.
         */
        public Builder period(final java.lang.String period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: If prepaid payment type, then the parameters specified in the purchase package instance or instances as examples of a monthly subscription, which can be: Year: Annual, Month: monthly.
         * <p>
         * @return {@code this}
         * @param period Property period: If prepaid payment type, then the parameters specified in the purchase package instance or instances as examples of a monthly subscription, which can be: Year: Annual, Month: monthly. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property structureInitialization: Whether to initialize the structure object before synchronization.
         * <p>
         * The values include:true: indicates that the structure object is initialized
         * false: no result object initialization
         * The default value is: true
         * <p>
         * @return {@code this}
         * @param structureInitialization Property structureInitialization: Whether to initialize the structure object before synchronization. This parameter is required.
         */
        public Builder structureInitialization(final java.lang.Boolean structureInitialization) {
            this.props.structureInitialization(structureInitialization);
            return this;
        }
        /**
         * Property structureInitialization: Whether to initialize the structure object before synchronization.
         * <p>
         * The values include:true: indicates that the structure object is initialized
         * false: no result object initialization
         * The default value is: true
         * <p>
         * @return {@code this}
         * @param structureInitialization Property structureInitialization: Whether to initialize the structure object before synchronization. This parameter is required.
         */
        public Builder structureInitialization(final com.aliyun.ros.cdk.core.IResolvable structureInitialization) {
            this.props.structureInitialization(structureInitialization);
            return this;
        }

        /**
         * Property synchronizationObjects: Objects that need to be synchronized.
         * <p>
         * @return {@code this}
         * @param synchronizationObjects Property synchronizationObjects: Objects that need to be synchronized. This parameter is required.
         */
        public Builder synchronizationObjects(final com.aliyun.ros.cdk.core.IResolvable synchronizationObjects) {
            this.props.synchronizationObjects(synchronizationObjects);
            return this;
        }
        /**
         * Property synchronizationObjects: Objects that need to be synchronized.
         * <p>
         * @return {@code this}
         * @param synchronizationObjects Property synchronizationObjects: Objects that need to be synchronized. This parameter is required.
         */
        public Builder synchronizationObjects(final java.util.List<? extends java.lang.Object> synchronizationObjects) {
            this.props.synchronizationObjects(synchronizationObjects);
            return this;
        }

        /**
         * Property topology: Synchronous topology, the value includes: oneway, bidirectional.the default value is: oneway, only MySQL-> MySQL synchronization, this parameter can receive the value bidirectional.
         * <p>
         * @return {@code this}
         * @param topology Property topology: Synchronous topology, the value includes: oneway, bidirectional.the default value is: oneway, only MySQL-> MySQL synchronization, this parameter can receive the value bidirectional. This parameter is required.
         */
        public Builder topology(final java.lang.String topology) {
            this.props.topology(topology);
            return this;
        }
        /**
         * Property topology: Synchronous topology, the value includes: oneway, bidirectional.the default value is: oneway, only MySQL-> MySQL synchronization, this parameter can receive the value bidirectional.
         * <p>
         * @return {@code this}
         * @param topology Property topology: Synchronous topology, the value includes: oneway, bidirectional.the default value is: oneway, only MySQL-> MySQL synchronization, this parameter can receive the value bidirectional. This parameter is required.
         */
        public Builder topology(final com.aliyun.ros.cdk.core.IResolvable topology) {
            this.props.topology(topology);
            return this;
        }

        /**
         * Property usedTime: f the payment type is prepaid, then this parameter is the length of the purchase, and parameters such as 1, 2, 3 can be passed in as needed.
         * <p>
         * @return {@code this}
         * @param usedTime Property usedTime: f the payment type is prepaid, then this parameter is the length of the purchase, and parameters such as 1, 2, 3 can be passed in as needed. This parameter is required.
         */
        public Builder usedTime(final java.lang.Number usedTime) {
            this.props.usedTime(usedTime);
            return this;
        }
        /**
         * Property usedTime: f the payment type is prepaid, then this parameter is the length of the purchase, and parameters such as 1, 2, 3 can be passed in as needed.
         * <p>
         * @return {@code this}
         * @param usedTime Property usedTime: f the payment type is prepaid, then this parameter is the length of the purchase, and parameters such as 1, 2, 3 can be passed in as needed. This parameter is required.
         */
        public Builder usedTime(final com.aliyun.ros.cdk.core.IResolvable usedTime) {
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
