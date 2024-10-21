package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>RosRouteEntries</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routeentries
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:34.464Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.RosRouteEntriesProps")
@software.amazon.jsii.Jsii.Proxy(RosRouteEntriesProps.Jsii$Proxy.class)
public interface RosRouteEntriesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRouteTableId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationCidrBlock() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNextHopId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNextHopType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouteEntryId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouteEntryName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouteEntryType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosRouteEntriesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosRouteEntriesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosRouteEntriesProps> {
        java.lang.Object routeTableId;
        java.lang.Object destinationCidrBlock;
        java.lang.Object ipVersion;
        java.lang.Object nextHopId;
        java.lang.Object nextHopType;
        java.lang.Object refreshOptions;
        java.lang.Object routeEntryId;
        java.lang.Object routeEntryName;
        java.lang.Object routeEntryType;

        /**
         * Sets the value of {@link RosRouteEntriesProps#getRouteTableId}
         * @param routeTableId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder routeTableId(java.lang.String routeTableId) {
            this.routeTableId = routeTableId;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteEntriesProps#getRouteTableId}
         * @param routeTableId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder routeTableId(com.aliyun.ros.cdk.core.IResolvable routeTableId) {
            this.routeTableId = routeTableId;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteEntriesProps#getDestinationCidrBlock}
         * @param destinationCidrBlock the value to be set.
         * @return {@code this}
         */
        public Builder destinationCidrBlock(java.lang.String destinationCidrBlock) {
            this.destinationCidrBlock = destinationCidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteEntriesProps#getDestinationCidrBlock}
         * @param destinationCidrBlock the value to be set.
         * @return {@code this}
         */
        public Builder destinationCidrBlock(com.aliyun.ros.cdk.core.IResolvable destinationCidrBlock) {
            this.destinationCidrBlock = destinationCidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteEntriesProps#getIpVersion}
         * @param ipVersion the value to be set.
         * @return {@code this}
         */
        public Builder ipVersion(java.lang.String ipVersion) {
            this.ipVersion = ipVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteEntriesProps#getIpVersion}
         * @param ipVersion the value to be set.
         * @return {@code this}
         */
        public Builder ipVersion(com.aliyun.ros.cdk.core.IResolvable ipVersion) {
            this.ipVersion = ipVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteEntriesProps#getNextHopId}
         * @param nextHopId the value to be set.
         * @return {@code this}
         */
        public Builder nextHopId(java.lang.String nextHopId) {
            this.nextHopId = nextHopId;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteEntriesProps#getNextHopId}
         * @param nextHopId the value to be set.
         * @return {@code this}
         */
        public Builder nextHopId(com.aliyun.ros.cdk.core.IResolvable nextHopId) {
            this.nextHopId = nextHopId;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteEntriesProps#getNextHopType}
         * @param nextHopType the value to be set.
         * @return {@code this}
         */
        public Builder nextHopType(java.lang.String nextHopType) {
            this.nextHopType = nextHopType;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteEntriesProps#getNextHopType}
         * @param nextHopType the value to be set.
         * @return {@code this}
         */
        public Builder nextHopType(com.aliyun.ros.cdk.core.IResolvable nextHopType) {
            this.nextHopType = nextHopType;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteEntriesProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteEntriesProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteEntriesProps#getRouteEntryId}
         * @param routeEntryId the value to be set.
         * @return {@code this}
         */
        public Builder routeEntryId(java.lang.String routeEntryId) {
            this.routeEntryId = routeEntryId;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteEntriesProps#getRouteEntryId}
         * @param routeEntryId the value to be set.
         * @return {@code this}
         */
        public Builder routeEntryId(com.aliyun.ros.cdk.core.IResolvable routeEntryId) {
            this.routeEntryId = routeEntryId;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteEntriesProps#getRouteEntryName}
         * @param routeEntryName the value to be set.
         * @return {@code this}
         */
        public Builder routeEntryName(java.lang.String routeEntryName) {
            this.routeEntryName = routeEntryName;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteEntriesProps#getRouteEntryName}
         * @param routeEntryName the value to be set.
         * @return {@code this}
         */
        public Builder routeEntryName(com.aliyun.ros.cdk.core.IResolvable routeEntryName) {
            this.routeEntryName = routeEntryName;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteEntriesProps#getRouteEntryType}
         * @param routeEntryType the value to be set.
         * @return {@code this}
         */
        public Builder routeEntryType(java.lang.String routeEntryType) {
            this.routeEntryType = routeEntryType;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteEntriesProps#getRouteEntryType}
         * @param routeEntryType the value to be set.
         * @return {@code this}
         */
        public Builder routeEntryType(com.aliyun.ros.cdk.core.IResolvable routeEntryType) {
            this.routeEntryType = routeEntryType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosRouteEntriesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosRouteEntriesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosRouteEntriesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosRouteEntriesProps {
        private final java.lang.Object routeTableId;
        private final java.lang.Object destinationCidrBlock;
        private final java.lang.Object ipVersion;
        private final java.lang.Object nextHopId;
        private final java.lang.Object nextHopType;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object routeEntryId;
        private final java.lang.Object routeEntryName;
        private final java.lang.Object routeEntryType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.routeTableId = software.amazon.jsii.Kernel.get(this, "routeTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationCidrBlock = software.amazon.jsii.Kernel.get(this, "destinationCidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipVersion = software.amazon.jsii.Kernel.get(this, "ipVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nextHopId = software.amazon.jsii.Kernel.get(this, "nextHopId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nextHopType = software.amazon.jsii.Kernel.get(this, "nextHopType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeEntryId = software.amazon.jsii.Kernel.get(this, "routeEntryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeEntryName = software.amazon.jsii.Kernel.get(this, "routeEntryName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeEntryType = software.amazon.jsii.Kernel.get(this, "routeEntryType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.routeTableId = java.util.Objects.requireNonNull(builder.routeTableId, "routeTableId is required");
            this.destinationCidrBlock = builder.destinationCidrBlock;
            this.ipVersion = builder.ipVersion;
            this.nextHopId = builder.nextHopId;
            this.nextHopType = builder.nextHopType;
            this.refreshOptions = builder.refreshOptions;
            this.routeEntryId = builder.routeEntryId;
            this.routeEntryName = builder.routeEntryName;
            this.routeEntryType = builder.routeEntryType;
        }

        @Override
        public final java.lang.Object getRouteTableId() {
            return this.routeTableId;
        }

        @Override
        public final java.lang.Object getDestinationCidrBlock() {
            return this.destinationCidrBlock;
        }

        @Override
        public final java.lang.Object getIpVersion() {
            return this.ipVersion;
        }

        @Override
        public final java.lang.Object getNextHopId() {
            return this.nextHopId;
        }

        @Override
        public final java.lang.Object getNextHopType() {
            return this.nextHopType;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getRouteEntryId() {
            return this.routeEntryId;
        }

        @Override
        public final java.lang.Object getRouteEntryName() {
            return this.routeEntryName;
        }

        @Override
        public final java.lang.Object getRouteEntryType() {
            return this.routeEntryType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("routeTableId", om.valueToTree(this.getRouteTableId()));
            if (this.getDestinationCidrBlock() != null) {
                data.set("destinationCidrBlock", om.valueToTree(this.getDestinationCidrBlock()));
            }
            if (this.getIpVersion() != null) {
                data.set("ipVersion", om.valueToTree(this.getIpVersion()));
            }
            if (this.getNextHopId() != null) {
                data.set("nextHopId", om.valueToTree(this.getNextHopId()));
            }
            if (this.getNextHopType() != null) {
                data.set("nextHopType", om.valueToTree(this.getNextHopType()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getRouteEntryId() != null) {
                data.set("routeEntryId", om.valueToTree(this.getRouteEntryId()));
            }
            if (this.getRouteEntryName() != null) {
                data.set("routeEntryName", om.valueToTree(this.getRouteEntryName()));
            }
            if (this.getRouteEntryType() != null) {
                data.set("routeEntryType", om.valueToTree(this.getRouteEntryType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.RosRouteEntriesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosRouteEntriesProps.Jsii$Proxy that = (RosRouteEntriesProps.Jsii$Proxy) o;

            if (!routeTableId.equals(that.routeTableId)) return false;
            if (this.destinationCidrBlock != null ? !this.destinationCidrBlock.equals(that.destinationCidrBlock) : that.destinationCidrBlock != null) return false;
            if (this.ipVersion != null ? !this.ipVersion.equals(that.ipVersion) : that.ipVersion != null) return false;
            if (this.nextHopId != null ? !this.nextHopId.equals(that.nextHopId) : that.nextHopId != null) return false;
            if (this.nextHopType != null ? !this.nextHopType.equals(that.nextHopType) : that.nextHopType != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            if (this.routeEntryId != null ? !this.routeEntryId.equals(that.routeEntryId) : that.routeEntryId != null) return false;
            if (this.routeEntryName != null ? !this.routeEntryName.equals(that.routeEntryName) : that.routeEntryName != null) return false;
            return this.routeEntryType != null ? this.routeEntryType.equals(that.routeEntryType) : that.routeEntryType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.routeTableId.hashCode();
            result = 31 * result + (this.destinationCidrBlock != null ? this.destinationCidrBlock.hashCode() : 0);
            result = 31 * result + (this.ipVersion != null ? this.ipVersion.hashCode() : 0);
            result = 31 * result + (this.nextHopId != null ? this.nextHopId.hashCode() : 0);
            result = 31 * result + (this.nextHopType != null ? this.nextHopType.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.routeEntryId != null ? this.routeEntryId.hashCode() : 0);
            result = 31 * result + (this.routeEntryName != null ? this.routeEntryName.hashCode() : 0);
            result = 31 * result + (this.routeEntryType != null ? this.routeEntryType.hashCode() : 0);
            return result;
        }
    }
}
