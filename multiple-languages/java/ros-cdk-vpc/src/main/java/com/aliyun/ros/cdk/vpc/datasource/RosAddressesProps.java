package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>RosAddresses</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eip-addresses
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:43.340Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.RosAddressesProps")
@software.amazon.jsii.Jsii.Proxy(RosAddressesProps.Jsii$Proxy.class)
public interface RosAddressesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAddressName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAllocationId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpAddress() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsp() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPaymentType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSegmentInstanceId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAddressesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAddressesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAddressesProps> {
        java.lang.Object addressName;
        java.lang.Object allocationId;
        java.lang.Object instanceId;
        java.lang.Object instanceType;
        java.lang.Object ipAddress;
        java.lang.Object isp;
        java.lang.Object paymentType;
        java.lang.Object refreshOptions;
        java.lang.Object resourceGroupId;
        java.lang.Object segmentInstanceId;

        /**
         * Sets the value of {@link RosAddressesProps#getAddressName}
         * @param addressName the value to be set.
         * @return {@code this}
         */
        public Builder addressName(java.lang.String addressName) {
            this.addressName = addressName;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressesProps#getAddressName}
         * @param addressName the value to be set.
         * @return {@code this}
         */
        public Builder addressName(com.aliyun.ros.cdk.core.IResolvable addressName) {
            this.addressName = addressName;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressesProps#getAllocationId}
         * @param allocationId the value to be set.
         * @return {@code this}
         */
        public Builder allocationId(java.lang.String allocationId) {
            this.allocationId = allocationId;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressesProps#getAllocationId}
         * @param allocationId the value to be set.
         * @return {@code this}
         */
        public Builder allocationId(com.aliyun.ros.cdk.core.IResolvable allocationId) {
            this.allocationId = allocationId;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressesProps#getInstanceId}
         * @param instanceId the value to be set.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressesProps#getInstanceId}
         * @param instanceId the value to be set.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressesProps#getInstanceType}
         * @param instanceType the value to be set.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressesProps#getInstanceType}
         * @param instanceType the value to be set.
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressesProps#getIpAddress}
         * @param ipAddress the value to be set.
         * @return {@code this}
         */
        public Builder ipAddress(java.lang.String ipAddress) {
            this.ipAddress = ipAddress;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressesProps#getIpAddress}
         * @param ipAddress the value to be set.
         * @return {@code this}
         */
        public Builder ipAddress(com.aliyun.ros.cdk.core.IResolvable ipAddress) {
            this.ipAddress = ipAddress;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressesProps#getIsp}
         * @param isp the value to be set.
         * @return {@code this}
         */
        public Builder isp(java.lang.String isp) {
            this.isp = isp;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressesProps#getIsp}
         * @param isp the value to be set.
         * @return {@code this}
         */
        public Builder isp(com.aliyun.ros.cdk.core.IResolvable isp) {
            this.isp = isp;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressesProps#getPaymentType}
         * @param paymentType the value to be set.
         * @return {@code this}
         */
        public Builder paymentType(java.lang.String paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressesProps#getPaymentType}
         * @param paymentType the value to be set.
         * @return {@code this}
         */
        public Builder paymentType(com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressesProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressesProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressesProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressesProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressesProps#getSegmentInstanceId}
         * @param segmentInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder segmentInstanceId(java.lang.String segmentInstanceId) {
            this.segmentInstanceId = segmentInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressesProps#getSegmentInstanceId}
         * @param segmentInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder segmentInstanceId(com.aliyun.ros.cdk.core.IResolvable segmentInstanceId) {
            this.segmentInstanceId = segmentInstanceId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAddressesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAddressesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAddressesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAddressesProps {
        private final java.lang.Object addressName;
        private final java.lang.Object allocationId;
        private final java.lang.Object instanceId;
        private final java.lang.Object instanceType;
        private final java.lang.Object ipAddress;
        private final java.lang.Object isp;
        private final java.lang.Object paymentType;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object segmentInstanceId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.addressName = software.amazon.jsii.Kernel.get(this, "addressName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.allocationId = software.amazon.jsii.Kernel.get(this, "allocationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipAddress = software.amazon.jsii.Kernel.get(this, "ipAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isp = software.amazon.jsii.Kernel.get(this, "isp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.paymentType = software.amazon.jsii.Kernel.get(this, "paymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.segmentInstanceId = software.amazon.jsii.Kernel.get(this, "segmentInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.addressName = builder.addressName;
            this.allocationId = builder.allocationId;
            this.instanceId = builder.instanceId;
            this.instanceType = builder.instanceType;
            this.ipAddress = builder.ipAddress;
            this.isp = builder.isp;
            this.paymentType = builder.paymentType;
            this.refreshOptions = builder.refreshOptions;
            this.resourceGroupId = builder.resourceGroupId;
            this.segmentInstanceId = builder.segmentInstanceId;
        }

        @Override
        public final java.lang.Object getAddressName() {
            return this.addressName;
        }

        @Override
        public final java.lang.Object getAllocationId() {
            return this.allocationId;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getInstanceType() {
            return this.instanceType;
        }

        @Override
        public final java.lang.Object getIpAddress() {
            return this.ipAddress;
        }

        @Override
        public final java.lang.Object getIsp() {
            return this.isp;
        }

        @Override
        public final java.lang.Object getPaymentType() {
            return this.paymentType;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSegmentInstanceId() {
            return this.segmentInstanceId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAddressName() != null) {
                data.set("addressName", om.valueToTree(this.getAddressName()));
            }
            if (this.getAllocationId() != null) {
                data.set("allocationId", om.valueToTree(this.getAllocationId()));
            }
            if (this.getInstanceId() != null) {
                data.set("instanceId", om.valueToTree(this.getInstanceId()));
            }
            if (this.getInstanceType() != null) {
                data.set("instanceType", om.valueToTree(this.getInstanceType()));
            }
            if (this.getIpAddress() != null) {
                data.set("ipAddress", om.valueToTree(this.getIpAddress()));
            }
            if (this.getIsp() != null) {
                data.set("isp", om.valueToTree(this.getIsp()));
            }
            if (this.getPaymentType() != null) {
                data.set("paymentType", om.valueToTree(this.getPaymentType()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSegmentInstanceId() != null) {
                data.set("segmentInstanceId", om.valueToTree(this.getSegmentInstanceId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.RosAddressesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAddressesProps.Jsii$Proxy that = (RosAddressesProps.Jsii$Proxy) o;

            if (this.addressName != null ? !this.addressName.equals(that.addressName) : that.addressName != null) return false;
            if (this.allocationId != null ? !this.allocationId.equals(that.allocationId) : that.allocationId != null) return false;
            if (this.instanceId != null ? !this.instanceId.equals(that.instanceId) : that.instanceId != null) return false;
            if (this.instanceType != null ? !this.instanceType.equals(that.instanceType) : that.instanceType != null) return false;
            if (this.ipAddress != null ? !this.ipAddress.equals(that.ipAddress) : that.ipAddress != null) return false;
            if (this.isp != null ? !this.isp.equals(that.isp) : that.isp != null) return false;
            if (this.paymentType != null ? !this.paymentType.equals(that.paymentType) : that.paymentType != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.segmentInstanceId != null ? this.segmentInstanceId.equals(that.segmentInstanceId) : that.segmentInstanceId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.addressName != null ? this.addressName.hashCode() : 0;
            result = 31 * result + (this.allocationId != null ? this.allocationId.hashCode() : 0);
            result = 31 * result + (this.instanceId != null ? this.instanceId.hashCode() : 0);
            result = 31 * result + (this.instanceType != null ? this.instanceType.hashCode() : 0);
            result = 31 * result + (this.ipAddress != null ? this.ipAddress.hashCode() : 0);
            result = 31 * result + (this.isp != null ? this.isp.hashCode() : 0);
            result = 31 * result + (this.paymentType != null ? this.paymentType.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.segmentInstanceId != null ? this.segmentInstanceId.hashCode() : 0);
            return result;
        }
    }
}
