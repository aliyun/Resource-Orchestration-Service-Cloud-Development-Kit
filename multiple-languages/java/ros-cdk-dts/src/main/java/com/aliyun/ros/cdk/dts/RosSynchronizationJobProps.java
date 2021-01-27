package com.aliyun.ros.cdk.dts;

/**
 * Properties for defining a `ALIYUN::DTS::SynchronizationJob`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.567Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.RosSynchronizationJobProps")
@software.amazon.jsii.Jsii.Proxy(RosSynchronizationJobProps.Jsii$Proxy.class)
public interface RosSynchronizationJobProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDestinationEndpoint();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDestRegion();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceEndpoint();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getSourceRegion();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getSynchronizationJobClass();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDataInitialization() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getNetworkType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPayType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStructureInitialization() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSynchronizationObjects() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getTopology() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getUsedTime() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSynchronizationJobProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSynchronizationJobProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSynchronizationJobProps> {
        private java.lang.Object destinationEndpoint;
        private java.lang.String destRegion;
        private java.lang.Object sourceEndpoint;
        private java.lang.String sourceRegion;
        private java.lang.String synchronizationJobClass;
        private java.lang.Object dataInitialization;
        private java.lang.String networkType;
        private java.lang.String payType;
        private java.lang.String period;
        private java.lang.Object structureInitialization;
        private java.lang.Object synchronizationObjects;
        private java.lang.String topology;
        private java.lang.Number usedTime;

        /**
         * Sets the value of {@link RosSynchronizationJobProps#getDestinationEndpoint}
         * @param destinationEndpoint the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationEndpoint(com.aliyun.ros.cdk.dts.RosSynchronizationJob.DestinationEndpointProperty destinationEndpoint) {
            this.destinationEndpoint = destinationEndpoint;
            return this;
        }

        /**
         * Sets the value of {@link RosSynchronizationJobProps#getDestinationEndpoint}
         * @param destinationEndpoint the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationEndpoint(com.aliyun.ros.cdk.core.IResolvable destinationEndpoint) {
            this.destinationEndpoint = destinationEndpoint;
            return this;
        }

        /**
         * Sets the value of {@link RosSynchronizationJobProps#getDestRegion}
         * @param destRegion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder destRegion(java.lang.String destRegion) {
            this.destRegion = destRegion;
            return this;
        }

        /**
         * Sets the value of {@link RosSynchronizationJobProps#getSourceEndpoint}
         * @param sourceEndpoint the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceEndpoint(com.aliyun.ros.cdk.core.IResolvable sourceEndpoint) {
            this.sourceEndpoint = sourceEndpoint;
            return this;
        }

        /**
         * Sets the value of {@link RosSynchronizationJobProps#getSourceEndpoint}
         * @param sourceEndpoint the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceEndpoint(com.aliyun.ros.cdk.dts.RosSynchronizationJob.SourceEndpointProperty sourceEndpoint) {
            this.sourceEndpoint = sourceEndpoint;
            return this;
        }

        /**
         * Sets the value of {@link RosSynchronizationJobProps#getSourceRegion}
         * @param sourceRegion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceRegion(java.lang.String sourceRegion) {
            this.sourceRegion = sourceRegion;
            return this;
        }

        /**
         * Sets the value of {@link RosSynchronizationJobProps#getSynchronizationJobClass}
         * @param synchronizationJobClass the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder synchronizationJobClass(java.lang.String synchronizationJobClass) {
            this.synchronizationJobClass = synchronizationJobClass;
            return this;
        }

        /**
         * Sets the value of {@link RosSynchronizationJobProps#getDataInitialization}
         * @param dataInitialization the value to be set.
         * @return {@code this}
         */
        public Builder dataInitialization(java.lang.Boolean dataInitialization) {
            this.dataInitialization = dataInitialization;
            return this;
        }

        /**
         * Sets the value of {@link RosSynchronizationJobProps#getDataInitialization}
         * @param dataInitialization the value to be set.
         * @return {@code this}
         */
        public Builder dataInitialization(com.aliyun.ros.cdk.core.IResolvable dataInitialization) {
            this.dataInitialization = dataInitialization;
            return this;
        }

        /**
         * Sets the value of {@link RosSynchronizationJobProps#getNetworkType}
         * @param networkType the value to be set.
         * @return {@code this}
         */
        public Builder networkType(java.lang.String networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link RosSynchronizationJobProps#getPayType}
         * @param payType the value to be set.
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosSynchronizationJobProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.String period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosSynchronizationJobProps#getStructureInitialization}
         * @param structureInitialization the value to be set.
         * @return {@code this}
         */
        public Builder structureInitialization(java.lang.Boolean structureInitialization) {
            this.structureInitialization = structureInitialization;
            return this;
        }

        /**
         * Sets the value of {@link RosSynchronizationJobProps#getStructureInitialization}
         * @param structureInitialization the value to be set.
         * @return {@code this}
         */
        public Builder structureInitialization(com.aliyun.ros.cdk.core.IResolvable structureInitialization) {
            this.structureInitialization = structureInitialization;
            return this;
        }

        /**
         * Sets the value of {@link RosSynchronizationJobProps#getSynchronizationObjects}
         * @param synchronizationObjects the value to be set.
         * @return {@code this}
         */
        public Builder synchronizationObjects(com.aliyun.ros.cdk.core.IResolvable synchronizationObjects) {
            this.synchronizationObjects = synchronizationObjects;
            return this;
        }

        /**
         * Sets the value of {@link RosSynchronizationJobProps#getSynchronizationObjects}
         * @param synchronizationObjects the value to be set.
         * @return {@code this}
         */
        public Builder synchronizationObjects(java.util.List<? extends java.lang.Object> synchronizationObjects) {
            this.synchronizationObjects = synchronizationObjects;
            return this;
        }

        /**
         * Sets the value of {@link RosSynchronizationJobProps#getTopology}
         * @param topology the value to be set.
         * @return {@code this}
         */
        public Builder topology(java.lang.String topology) {
            this.topology = topology;
            return this;
        }

        /**
         * Sets the value of {@link RosSynchronizationJobProps#getUsedTime}
         * @param usedTime the value to be set.
         * @return {@code this}
         */
        public Builder usedTime(java.lang.Number usedTime) {
            this.usedTime = usedTime;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSynchronizationJobProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSynchronizationJobProps build() {
            return new Jsii$Proxy(destinationEndpoint, destRegion, sourceEndpoint, sourceRegion, synchronizationJobClass, dataInitialization, networkType, payType, period, structureInitialization, synchronizationObjects, topology, usedTime);
        }
    }

    /**
     * An implementation for {@link RosSynchronizationJobProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSynchronizationJobProps {
        private final java.lang.Object destinationEndpoint;
        private final java.lang.String destRegion;
        private final java.lang.Object sourceEndpoint;
        private final java.lang.String sourceRegion;
        private final java.lang.String synchronizationJobClass;
        private final java.lang.Object dataInitialization;
        private final java.lang.String networkType;
        private final java.lang.String payType;
        private final java.lang.String period;
        private final java.lang.Object structureInitialization;
        private final java.lang.Object synchronizationObjects;
        private final java.lang.String topology;
        private final java.lang.Number usedTime;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.destinationEndpoint = software.amazon.jsii.Kernel.get(this, "destinationEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destRegion = software.amazon.jsii.Kernel.get(this, "destRegion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.sourceEndpoint = software.amazon.jsii.Kernel.get(this, "sourceEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceRegion = software.amazon.jsii.Kernel.get(this, "sourceRegion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.synchronizationJobClass = software.amazon.jsii.Kernel.get(this, "synchronizationJobClass", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dataInitialization = software.amazon.jsii.Kernel.get(this, "dataInitialization", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkType = software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.structureInitialization = software.amazon.jsii.Kernel.get(this, "structureInitialization", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.synchronizationObjects = software.amazon.jsii.Kernel.get(this, "synchronizationObjects", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.topology = software.amazon.jsii.Kernel.get(this, "topology", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.usedTime = software.amazon.jsii.Kernel.get(this, "usedTime", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object destinationEndpoint, final java.lang.String destRegion, final java.lang.Object sourceEndpoint, final java.lang.String sourceRegion, final java.lang.String synchronizationJobClass, final java.lang.Object dataInitialization, final java.lang.String networkType, final java.lang.String payType, final java.lang.String period, final java.lang.Object structureInitialization, final java.lang.Object synchronizationObjects, final java.lang.String topology, final java.lang.Number usedTime) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.destinationEndpoint = java.util.Objects.requireNonNull(destinationEndpoint, "destinationEndpoint is required");
            this.destRegion = java.util.Objects.requireNonNull(destRegion, "destRegion is required");
            this.sourceEndpoint = java.util.Objects.requireNonNull(sourceEndpoint, "sourceEndpoint is required");
            this.sourceRegion = java.util.Objects.requireNonNull(sourceRegion, "sourceRegion is required");
            this.synchronizationJobClass = java.util.Objects.requireNonNull(synchronizationJobClass, "synchronizationJobClass is required");
            this.dataInitialization = dataInitialization;
            this.networkType = networkType;
            this.payType = payType;
            this.period = period;
            this.structureInitialization = structureInitialization;
            this.synchronizationObjects = synchronizationObjects;
            this.topology = topology;
            this.usedTime = usedTime;
        }

        @Override
        public final java.lang.Object getDestinationEndpoint() {
            return this.destinationEndpoint;
        }

        @Override
        public final java.lang.String getDestRegion() {
            return this.destRegion;
        }

        @Override
        public final java.lang.Object getSourceEndpoint() {
            return this.sourceEndpoint;
        }

        @Override
        public final java.lang.String getSourceRegion() {
            return this.sourceRegion;
        }

        @Override
        public final java.lang.String getSynchronizationJobClass() {
            return this.synchronizationJobClass;
        }

        @Override
        public final java.lang.Object getDataInitialization() {
            return this.dataInitialization;
        }

        @Override
        public final java.lang.String getNetworkType() {
            return this.networkType;
        }

        @Override
        public final java.lang.String getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.String getPeriod() {
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
        public final java.lang.String getTopology() {
            return this.topology;
        }

        @Override
        public final java.lang.Number getUsedTime() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dts.RosSynchronizationJobProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSynchronizationJobProps.Jsii$Proxy that = (RosSynchronizationJobProps.Jsii$Proxy) o;

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
