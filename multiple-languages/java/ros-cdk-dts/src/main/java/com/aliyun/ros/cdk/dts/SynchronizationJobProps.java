package com.aliyun.ros.cdk.dts;

/**
 * Properties for defining a <code>ALIYUN::DTS::SynchronizationJob</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:55:59.218Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.SynchronizationJobProps")
@software.amazon.jsii.Jsii.Proxy(SynchronizationJobProps.Jsii$Proxy.class)
public interface SynchronizationJobProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property destinationEndpoint: Migration target configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDestinationEndpoint();

    /**
     * Property destRegion: Region where the synchronization target instance is located.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDestRegion();

    /**
     * Property sourceEndpoint: Migration source configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceEndpoint();

    /**
     * Property sourceRegion: Region where the synchronization source instance is located.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceRegion();

    /**
     * Property synchronizationJobClass: Synchronous instance specifications, which can be: micro, small, medium, large and so on.
     * <p>
     * The default value is: small
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSynchronizationJobClass();

    /**
     * Property dataInitialization: Whether to perform full data initialization before synchronization.
     * <p>
     * The values include:true: means full data initialization
     * false: no full data initialization
     * The default value is: true
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDataInitialization() {
        return null;
    }

    /**
     * Property networkType: When synchronization geographies, the type of data transmission network used.
     * <p>
     * Value include: Internet, Intranet. The default value is: Internet
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkType() {
        return null;
    }

    /**
     * Property payType: Payment type, which include: Postpaid: postpaid type, Prepaid: Prepaid type.
     * <p>
     * Default is Postpaid
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPayType() {
        return null;
    }

    /**
     * Property period: If prepaid payment type, then the parameters specified in the purchase package instance or instances as examples of a monthly subscription, which can be: Year: Annual, Month: monthly.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property structureInitialization: Whether to initialize the structure object before synchronization.
     * <p>
     * The values include:true: indicates that the structure object is initialized
     * false: no result object initialization
     * The default value is: true
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStructureInitialization() {
        return null;
    }

    /**
     * Property synchronizationObjects: Objects that need to be synchronized.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSynchronizationObjects() {
        return null;
    }

    /**
     * Property topology: Synchronous topology, the value includes: oneway, bidirectional.the default value is: oneway, only MySQL-&gt; MySQL synchronization, this parameter can receive the value bidirectional.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTopology() {
        return null;
    }

    /**
     * Property usedTime: f the payment type is prepaid, then this parameter is the length of the purchase, and parameters such as 1, 2, 3 can be passed in as needed.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUsedTime() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SynchronizationJobProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SynchronizationJobProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SynchronizationJobProps> {
        java.lang.Object destinationEndpoint;
        java.lang.Object destRegion;
        java.lang.Object sourceEndpoint;
        java.lang.Object sourceRegion;
        java.lang.Object synchronizationJobClass;
        java.lang.Object dataInitialization;
        java.lang.Object networkType;
        java.lang.Object payType;
        java.lang.Object period;
        java.lang.Object structureInitialization;
        java.lang.Object synchronizationObjects;
        java.lang.Object topology;
        java.lang.Object usedTime;

        /**
         * Sets the value of {@link SynchronizationJobProps#getDestinationEndpoint}
         * @param destinationEndpoint Property destinationEndpoint: Migration target configuration. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationEndpoint(com.aliyun.ros.cdk.core.IResolvable destinationEndpoint) {
            this.destinationEndpoint = destinationEndpoint;
            return this;
        }

        /**
         * Sets the value of {@link SynchronizationJobProps#getDestinationEndpoint}
         * @param destinationEndpoint Property destinationEndpoint: Migration target configuration. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationEndpoint(com.aliyun.ros.cdk.dts.RosSynchronizationJob.DestinationEndpointProperty destinationEndpoint) {
            this.destinationEndpoint = destinationEndpoint;
            return this;
        }

        /**
         * Sets the value of {@link SynchronizationJobProps#getDestRegion}
         * @param destRegion Property destRegion: Region where the synchronization target instance is located. This parameter is required.
         * @return {@code this}
         */
        public Builder destRegion(java.lang.String destRegion) {
            this.destRegion = destRegion;
            return this;
        }

        /**
         * Sets the value of {@link SynchronizationJobProps#getDestRegion}
         * @param destRegion Property destRegion: Region where the synchronization target instance is located. This parameter is required.
         * @return {@code this}
         */
        public Builder destRegion(com.aliyun.ros.cdk.core.IResolvable destRegion) {
            this.destRegion = destRegion;
            return this;
        }

        /**
         * Sets the value of {@link SynchronizationJobProps#getSourceEndpoint}
         * @param sourceEndpoint Property sourceEndpoint: Migration source configuration. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceEndpoint(com.aliyun.ros.cdk.core.IResolvable sourceEndpoint) {
            this.sourceEndpoint = sourceEndpoint;
            return this;
        }

        /**
         * Sets the value of {@link SynchronizationJobProps#getSourceEndpoint}
         * @param sourceEndpoint Property sourceEndpoint: Migration source configuration. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceEndpoint(com.aliyun.ros.cdk.dts.RosSynchronizationJob.SourceEndpointProperty sourceEndpoint) {
            this.sourceEndpoint = sourceEndpoint;
            return this;
        }

        /**
         * Sets the value of {@link SynchronizationJobProps#getSourceRegion}
         * @param sourceRegion Property sourceRegion: Region where the synchronization source instance is located. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceRegion(java.lang.String sourceRegion) {
            this.sourceRegion = sourceRegion;
            return this;
        }

        /**
         * Sets the value of {@link SynchronizationJobProps#getSourceRegion}
         * @param sourceRegion Property sourceRegion: Region where the synchronization source instance is located. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceRegion(com.aliyun.ros.cdk.core.IResolvable sourceRegion) {
            this.sourceRegion = sourceRegion;
            return this;
        }

        /**
         * Sets the value of {@link SynchronizationJobProps#getSynchronizationJobClass}
         * @param synchronizationJobClass Property synchronizationJobClass: Synchronous instance specifications, which can be: micro, small, medium, large and so on. This parameter is required.
         *                                The default value is: small
         * @return {@code this}
         */
        public Builder synchronizationJobClass(java.lang.String synchronizationJobClass) {
            this.synchronizationJobClass = synchronizationJobClass;
            return this;
        }

        /**
         * Sets the value of {@link SynchronizationJobProps#getSynchronizationJobClass}
         * @param synchronizationJobClass Property synchronizationJobClass: Synchronous instance specifications, which can be: micro, small, medium, large and so on. This parameter is required.
         *                                The default value is: small
         * @return {@code this}
         */
        public Builder synchronizationJobClass(com.aliyun.ros.cdk.core.IResolvable synchronizationJobClass) {
            this.synchronizationJobClass = synchronizationJobClass;
            return this;
        }

        /**
         * Sets the value of {@link SynchronizationJobProps#getDataInitialization}
         * @param dataInitialization Property dataInitialization: Whether to perform full data initialization before synchronization.
         *                           The values include:true: means full data initialization
         *                           false: no full data initialization
         *                           The default value is: true
         * @return {@code this}
         */
        public Builder dataInitialization(java.lang.Boolean dataInitialization) {
            this.dataInitialization = dataInitialization;
            return this;
        }

        /**
         * Sets the value of {@link SynchronizationJobProps#getDataInitialization}
         * @param dataInitialization Property dataInitialization: Whether to perform full data initialization before synchronization.
         *                           The values include:true: means full data initialization
         *                           false: no full data initialization
         *                           The default value is: true
         * @return {@code this}
         */
        public Builder dataInitialization(com.aliyun.ros.cdk.core.IResolvable dataInitialization) {
            this.dataInitialization = dataInitialization;
            return this;
        }

        /**
         * Sets the value of {@link SynchronizationJobProps#getNetworkType}
         * @param networkType Property networkType: When synchronization geographies, the type of data transmission network used.
         *                    Value include: Internet, Intranet. The default value is: Internet
         * @return {@code this}
         */
        public Builder networkType(java.lang.String networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link SynchronizationJobProps#getNetworkType}
         * @param networkType Property networkType: When synchronization geographies, the type of data transmission network used.
         *                    Value include: Internet, Intranet. The default value is: Internet
         * @return {@code this}
         */
        public Builder networkType(com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link SynchronizationJobProps#getPayType}
         * @param payType Property payType: Payment type, which include: Postpaid: postpaid type, Prepaid: Prepaid type.
         *                Default is Postpaid
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link SynchronizationJobProps#getPayType}
         * @param payType Property payType: Payment type, which include: Postpaid: postpaid type, Prepaid: Prepaid type.
         *                Default is Postpaid
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link SynchronizationJobProps#getPeriod}
         * @param period Property period: If prepaid payment type, then the parameters specified in the purchase package instance or instances as examples of a monthly subscription, which can be: Year: Annual, Month: monthly.
         * @return {@code this}
         */
        public Builder period(java.lang.String period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link SynchronizationJobProps#getPeriod}
         * @param period Property period: If prepaid payment type, then the parameters specified in the purchase package instance or instances as examples of a monthly subscription, which can be: Year: Annual, Month: monthly.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link SynchronizationJobProps#getStructureInitialization}
         * @param structureInitialization Property structureInitialization: Whether to initialize the structure object before synchronization.
         *                                The values include:true: indicates that the structure object is initialized
         *                                false: no result object initialization
         *                                The default value is: true
         * @return {@code this}
         */
        public Builder structureInitialization(java.lang.Boolean structureInitialization) {
            this.structureInitialization = structureInitialization;
            return this;
        }

        /**
         * Sets the value of {@link SynchronizationJobProps#getStructureInitialization}
         * @param structureInitialization Property structureInitialization: Whether to initialize the structure object before synchronization.
         *                                The values include:true: indicates that the structure object is initialized
         *                                false: no result object initialization
         *                                The default value is: true
         * @return {@code this}
         */
        public Builder structureInitialization(com.aliyun.ros.cdk.core.IResolvable structureInitialization) {
            this.structureInitialization = structureInitialization;
            return this;
        }

        /**
         * Sets the value of {@link SynchronizationJobProps#getSynchronizationObjects}
         * @param synchronizationObjects Property synchronizationObjects: Objects that need to be synchronized.
         * @return {@code this}
         */
        public Builder synchronizationObjects(com.aliyun.ros.cdk.core.IResolvable synchronizationObjects) {
            this.synchronizationObjects = synchronizationObjects;
            return this;
        }

        /**
         * Sets the value of {@link SynchronizationJobProps#getSynchronizationObjects}
         * @param synchronizationObjects Property synchronizationObjects: Objects that need to be synchronized.
         * @return {@code this}
         */
        public Builder synchronizationObjects(java.util.List<? extends java.lang.Object> synchronizationObjects) {
            this.synchronizationObjects = synchronizationObjects;
            return this;
        }

        /**
         * Sets the value of {@link SynchronizationJobProps#getTopology}
         * @param topology Property topology: Synchronous topology, the value includes: oneway, bidirectional.the default value is: oneway, only MySQL-&gt; MySQL synchronization, this parameter can receive the value bidirectional.
         * @return {@code this}
         */
        public Builder topology(java.lang.String topology) {
            this.topology = topology;
            return this;
        }

        /**
         * Sets the value of {@link SynchronizationJobProps#getTopology}
         * @param topology Property topology: Synchronous topology, the value includes: oneway, bidirectional.the default value is: oneway, only MySQL-&gt; MySQL synchronization, this parameter can receive the value bidirectional.
         * @return {@code this}
         */
        public Builder topology(com.aliyun.ros.cdk.core.IResolvable topology) {
            this.topology = topology;
            return this;
        }

        /**
         * Sets the value of {@link SynchronizationJobProps#getUsedTime}
         * @param usedTime Property usedTime: f the payment type is prepaid, then this parameter is the length of the purchase, and parameters such as 1, 2, 3 can be passed in as needed.
         * @return {@code this}
         */
        public Builder usedTime(java.lang.Number usedTime) {
            this.usedTime = usedTime;
            return this;
        }

        /**
         * Sets the value of {@link SynchronizationJobProps#getUsedTime}
         * @param usedTime Property usedTime: f the payment type is prepaid, then this parameter is the length of the purchase, and parameters such as 1, 2, 3 can be passed in as needed.
         * @return {@code this}
         */
        public Builder usedTime(com.aliyun.ros.cdk.core.IResolvable usedTime) {
            this.usedTime = usedTime;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SynchronizationJobProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SynchronizationJobProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SynchronizationJobProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SynchronizationJobProps {
        private final java.lang.Object destinationEndpoint;
        private final java.lang.Object destRegion;
        private final java.lang.Object sourceEndpoint;
        private final java.lang.Object sourceRegion;
        private final java.lang.Object synchronizationJobClass;
        private final java.lang.Object dataInitialization;
        private final java.lang.Object networkType;
        private final java.lang.Object payType;
        private final java.lang.Object period;
        private final java.lang.Object structureInitialization;
        private final java.lang.Object synchronizationObjects;
        private final java.lang.Object topology;
        private final java.lang.Object usedTime;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.destinationEndpoint = software.amazon.jsii.Kernel.get(this, "destinationEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destRegion = software.amazon.jsii.Kernel.get(this, "destRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceEndpoint = software.amazon.jsii.Kernel.get(this, "sourceEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceRegion = software.amazon.jsii.Kernel.get(this, "sourceRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.synchronizationJobClass = software.amazon.jsii.Kernel.get(this, "synchronizationJobClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dataInitialization = software.amazon.jsii.Kernel.get(this, "dataInitialization", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkType = software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.structureInitialization = software.amazon.jsii.Kernel.get(this, "structureInitialization", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.synchronizationObjects = software.amazon.jsii.Kernel.get(this, "synchronizationObjects", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.topology = software.amazon.jsii.Kernel.get(this, "topology", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.usedTime = software.amazon.jsii.Kernel.get(this, "usedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.destinationEndpoint = java.util.Objects.requireNonNull(builder.destinationEndpoint, "destinationEndpoint is required");
            this.destRegion = java.util.Objects.requireNonNull(builder.destRegion, "destRegion is required");
            this.sourceEndpoint = java.util.Objects.requireNonNull(builder.sourceEndpoint, "sourceEndpoint is required");
            this.sourceRegion = java.util.Objects.requireNonNull(builder.sourceRegion, "sourceRegion is required");
            this.synchronizationJobClass = java.util.Objects.requireNonNull(builder.synchronizationJobClass, "synchronizationJobClass is required");
            this.dataInitialization = builder.dataInitialization;
            this.networkType = builder.networkType;
            this.payType = builder.payType;
            this.period = builder.period;
            this.structureInitialization = builder.structureInitialization;
            this.synchronizationObjects = builder.synchronizationObjects;
            this.topology = builder.topology;
            this.usedTime = builder.usedTime;
        }

        @Override
        public final java.lang.Object getDestinationEndpoint() {
            return this.destinationEndpoint;
        }

        @Override
        public final java.lang.Object getDestRegion() {
            return this.destRegion;
        }

        @Override
        public final java.lang.Object getSourceEndpoint() {
            return this.sourceEndpoint;
        }

        @Override
        public final java.lang.Object getSourceRegion() {
            return this.sourceRegion;
        }

        @Override
        public final java.lang.Object getSynchronizationJobClass() {
            return this.synchronizationJobClass;
        }

        @Override
        public final java.lang.Object getDataInitialization() {
            return this.dataInitialization;
        }

        @Override
        public final java.lang.Object getNetworkType() {
            return this.networkType;
        }

        @Override
        public final java.lang.Object getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getStructureInitialization() {
            return this.structureInitialization;
        }

        @Override
        public final java.lang.Object getSynchronizationObjects() {
            return this.synchronizationObjects;
        }

        @Override
        public final java.lang.Object getTopology() {
            return this.topology;
        }

        @Override
        public final java.lang.Object getUsedTime() {
            return this.usedTime;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("destinationEndpoint", om.valueToTree(this.getDestinationEndpoint()));
            data.set("destRegion", om.valueToTree(this.getDestRegion()));
            data.set("sourceEndpoint", om.valueToTree(this.getSourceEndpoint()));
            data.set("sourceRegion", om.valueToTree(this.getSourceRegion()));
            data.set("synchronizationJobClass", om.valueToTree(this.getSynchronizationJobClass()));
            if (this.getDataInitialization() != null) {
                data.set("dataInitialization", om.valueToTree(this.getDataInitialization()));
            }
            if (this.getNetworkType() != null) {
                data.set("networkType", om.valueToTree(this.getNetworkType()));
            }
            if (this.getPayType() != null) {
                data.set("payType", om.valueToTree(this.getPayType()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getStructureInitialization() != null) {
                data.set("structureInitialization", om.valueToTree(this.getStructureInitialization()));
            }
            if (this.getSynchronizationObjects() != null) {
                data.set("synchronizationObjects", om.valueToTree(this.getSynchronizationObjects()));
            }
            if (this.getTopology() != null) {
                data.set("topology", om.valueToTree(this.getTopology()));
            }
            if (this.getUsedTime() != null) {
                data.set("usedTime", om.valueToTree(this.getUsedTime()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dts.SynchronizationJobProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SynchronizationJobProps.Jsii$Proxy that = (SynchronizationJobProps.Jsii$Proxy) o;

            if (!destinationEndpoint.equals(that.destinationEndpoint)) return false;
            if (!destRegion.equals(that.destRegion)) return false;
            if (!sourceEndpoint.equals(that.sourceEndpoint)) return false;
            if (!sourceRegion.equals(that.sourceRegion)) return false;
            if (!synchronizationJobClass.equals(that.synchronizationJobClass)) return false;
            if (this.dataInitialization != null ? !this.dataInitialization.equals(that.dataInitialization) : that.dataInitialization != null) return false;
            if (this.networkType != null ? !this.networkType.equals(that.networkType) : that.networkType != null) return false;
            if (this.payType != null ? !this.payType.equals(that.payType) : that.payType != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.structureInitialization != null ? !this.structureInitialization.equals(that.structureInitialization) : that.structureInitialization != null) return false;
            if (this.synchronizationObjects != null ? !this.synchronizationObjects.equals(that.synchronizationObjects) : that.synchronizationObjects != null) return false;
            if (this.topology != null ? !this.topology.equals(that.topology) : that.topology != null) return false;
            return this.usedTime != null ? this.usedTime.equals(that.usedTime) : that.usedTime == null;
        }

        @Override
        public final int hashCode() {
            int result = this.destinationEndpoint.hashCode();
            result = 31 * result + (this.destRegion.hashCode());
            result = 31 * result + (this.sourceEndpoint.hashCode());
            result = 31 * result + (this.sourceRegion.hashCode());
            result = 31 * result + (this.synchronizationJobClass.hashCode());
            result = 31 * result + (this.dataInitialization != null ? this.dataInitialization.hashCode() : 0);
            result = 31 * result + (this.networkType != null ? this.networkType.hashCode() : 0);
            result = 31 * result + (this.payType != null ? this.payType.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.structureInitialization != null ? this.structureInitialization.hashCode() : 0);
            result = 31 * result + (this.synchronizationObjects != null ? this.synchronizationObjects.hashCode() : 0);
            result = 31 * result + (this.topology != null ? this.topology.hashCode() : 0);
            result = 31 * result + (this.usedTime != null ? this.usedTime.hashCode() : 0);
            return result;
        }
    }
}
