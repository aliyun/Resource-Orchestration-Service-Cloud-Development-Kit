package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>VSwitchCidrReservation</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vswitchcidrreservation
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:34.276Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.VSwitchCidrReservationProps")
@software.amazon.jsii.Jsii.Proxy(VSwitchCidrReservationProps.Jsii$Proxy.class)
public interface VSwitchCidrReservationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property vSwitchId: The ID of the vSwitch to which the reserved CIDR block belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     * Property ipVersion: The IP version of the reserved CIDR block.
     * <p>
     * Valid values:
     * IPv4 (default)
     * IPv6
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpVersion() {
        return null;
    }

    /**
     * Property tags:.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.vpc.RosVSwitchCidrReservation.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property vSwitchCidrReservationCidr: The reserved CIDR block of the vSwitch.
     * <p>
     * When IpVersion is set to IPv4, the reserved CIDR block must be a proper subset of the IPv4 CIDR block of the vSwitch and the subnet mask length of the reserved CIDR block cannot be greater than 28.
     * When IpVersion is set to IPv6, the reserved CIDR block must be a proper subset of the IPv6 CIDR block of the vSwitch and the subnet mask length of the reserved CIDR block cannot be greater than 80.
     * Note You must specify one of VSwitchCidrReservationMask and VSwitchCidrReservationCidr.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchCidrReservationCidr() {
        return null;
    }

    /**
     * Property vSwitchCidrReservationDescription: The description of the reserved CIDR block.
     * <p>
     * This parameter is empty by default.
     * The description must be 2 to 256 characters in length. It must start with a letter and cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchCidrReservationDescription() {
        return null;
    }

    /**
     * Property vSwitchCidrReservationMask: The subnet mask of the reserved CIDR block.
     * <p>
     * When IpVersion is set to IPv4, the subnet mask length of the CIDR block must be greater than the IPv4 subnet mask length of the vSwitch and cannot be greater than 28.
     * When IpVersion is set to IPv6, the subnet mask length of the CIDR block must be greater than the IPv6 subnet mask length of the vSwitch and cannot be greater than 80.
     * Note You must specify one of VSwitchCidrReservationMask and VSwitchCidrReservationCidr.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchCidrReservationMask() {
        return null;
    }

    /**
     * Property vSwitchCidrReservationName: The name of the reserved CIDR block.
     * <p>
     * The name must be 2 to 128 characters in length and can contain digits, underscores (_), and hyphens (-). It must start with a letter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchCidrReservationName() {
        return null;
    }

    /**
     * Property vSwitchCidrReservationType: The type of reserved CIDR block.
     * <p>
     * Set the value to prefix.
     * Note When a user or a cloud service allocates a CIDR block to an elastic network interface (ENI), the CIDR block must be allocated from the reserved CIDR block. If the reserved CIDR block is exhausted, an error is returned.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchCidrReservationType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link VSwitchCidrReservationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VSwitchCidrReservationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VSwitchCidrReservationProps> {
        java.lang.Object vSwitchId;
        java.lang.Object ipVersion;
        java.util.List<com.aliyun.ros.cdk.vpc.RosVSwitchCidrReservation.TagsProperty> tags;
        java.lang.Object vSwitchCidrReservationCidr;
        java.lang.Object vSwitchCidrReservationDescription;
        java.lang.Object vSwitchCidrReservationMask;
        java.lang.Object vSwitchCidrReservationName;
        java.lang.Object vSwitchCidrReservationType;

        /**
         * Sets the value of {@link VSwitchCidrReservationProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch to which the reserved CIDR block belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchCidrReservationProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch to which the reserved CIDR block belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchCidrReservationProps#getIpVersion}
         * @param ipVersion Property ipVersion: The IP version of the reserved CIDR block.
         *                  Valid values:
         *                  IPv4 (default)
         *                  IPv6
         * @return {@code this}
         */
        public Builder ipVersion(java.lang.String ipVersion) {
            this.ipVersion = ipVersion;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchCidrReservationProps#getIpVersion}
         * @param ipVersion Property ipVersion: The IP version of the reserved CIDR block.
         *                  Valid values:
         *                  IPv4 (default)
         *                  IPv6
         * @return {@code this}
         */
        public Builder ipVersion(com.aliyun.ros.cdk.core.IResolvable ipVersion) {
            this.ipVersion = ipVersion;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchCidrReservationProps#getTags}
         * @param tags Property tags:.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.vpc.RosVSwitchCidrReservation.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.vpc.RosVSwitchCidrReservation.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchCidrReservationProps#getVSwitchCidrReservationCidr}
         * @param vSwitchCidrReservationCidr Property vSwitchCidrReservationCidr: The reserved CIDR block of the vSwitch.
         *                                   When IpVersion is set to IPv4, the reserved CIDR block must be a proper subset of the IPv4 CIDR block of the vSwitch and the subnet mask length of the reserved CIDR block cannot be greater than 28.
         *                                   When IpVersion is set to IPv6, the reserved CIDR block must be a proper subset of the IPv6 CIDR block of the vSwitch and the subnet mask length of the reserved CIDR block cannot be greater than 80.
         *                                   Note You must specify one of VSwitchCidrReservationMask and VSwitchCidrReservationCidr.
         * @return {@code this}
         */
        public Builder vSwitchCidrReservationCidr(java.lang.String vSwitchCidrReservationCidr) {
            this.vSwitchCidrReservationCidr = vSwitchCidrReservationCidr;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchCidrReservationProps#getVSwitchCidrReservationCidr}
         * @param vSwitchCidrReservationCidr Property vSwitchCidrReservationCidr: The reserved CIDR block of the vSwitch.
         *                                   When IpVersion is set to IPv4, the reserved CIDR block must be a proper subset of the IPv4 CIDR block of the vSwitch and the subnet mask length of the reserved CIDR block cannot be greater than 28.
         *                                   When IpVersion is set to IPv6, the reserved CIDR block must be a proper subset of the IPv6 CIDR block of the vSwitch and the subnet mask length of the reserved CIDR block cannot be greater than 80.
         *                                   Note You must specify one of VSwitchCidrReservationMask and VSwitchCidrReservationCidr.
         * @return {@code this}
         */
        public Builder vSwitchCidrReservationCidr(com.aliyun.ros.cdk.core.IResolvable vSwitchCidrReservationCidr) {
            this.vSwitchCidrReservationCidr = vSwitchCidrReservationCidr;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchCidrReservationProps#getVSwitchCidrReservationDescription}
         * @param vSwitchCidrReservationDescription Property vSwitchCidrReservationDescription: The description of the reserved CIDR block.
         *                                          This parameter is empty by default.
         *                                          The description must be 2 to 256 characters in length. It must start with a letter and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder vSwitchCidrReservationDescription(java.lang.String vSwitchCidrReservationDescription) {
            this.vSwitchCidrReservationDescription = vSwitchCidrReservationDescription;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchCidrReservationProps#getVSwitchCidrReservationDescription}
         * @param vSwitchCidrReservationDescription Property vSwitchCidrReservationDescription: The description of the reserved CIDR block.
         *                                          This parameter is empty by default.
         *                                          The description must be 2 to 256 characters in length. It must start with a letter and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder vSwitchCidrReservationDescription(com.aliyun.ros.cdk.core.IResolvable vSwitchCidrReservationDescription) {
            this.vSwitchCidrReservationDescription = vSwitchCidrReservationDescription;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchCidrReservationProps#getVSwitchCidrReservationMask}
         * @param vSwitchCidrReservationMask Property vSwitchCidrReservationMask: The subnet mask of the reserved CIDR block.
         *                                   When IpVersion is set to IPv4, the subnet mask length of the CIDR block must be greater than the IPv4 subnet mask length of the vSwitch and cannot be greater than 28.
         *                                   When IpVersion is set to IPv6, the subnet mask length of the CIDR block must be greater than the IPv6 subnet mask length of the vSwitch and cannot be greater than 80.
         *                                   Note You must specify one of VSwitchCidrReservationMask and VSwitchCidrReservationCidr.
         * @return {@code this}
         */
        public Builder vSwitchCidrReservationMask(java.lang.String vSwitchCidrReservationMask) {
            this.vSwitchCidrReservationMask = vSwitchCidrReservationMask;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchCidrReservationProps#getVSwitchCidrReservationMask}
         * @param vSwitchCidrReservationMask Property vSwitchCidrReservationMask: The subnet mask of the reserved CIDR block.
         *                                   When IpVersion is set to IPv4, the subnet mask length of the CIDR block must be greater than the IPv4 subnet mask length of the vSwitch and cannot be greater than 28.
         *                                   When IpVersion is set to IPv6, the subnet mask length of the CIDR block must be greater than the IPv6 subnet mask length of the vSwitch and cannot be greater than 80.
         *                                   Note You must specify one of VSwitchCidrReservationMask and VSwitchCidrReservationCidr.
         * @return {@code this}
         */
        public Builder vSwitchCidrReservationMask(com.aliyun.ros.cdk.core.IResolvable vSwitchCidrReservationMask) {
            this.vSwitchCidrReservationMask = vSwitchCidrReservationMask;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchCidrReservationProps#getVSwitchCidrReservationName}
         * @param vSwitchCidrReservationName Property vSwitchCidrReservationName: The name of the reserved CIDR block.
         *                                   The name must be 2 to 128 characters in length and can contain digits, underscores (_), and hyphens (-). It must start with a letter.
         * @return {@code this}
         */
        public Builder vSwitchCidrReservationName(java.lang.String vSwitchCidrReservationName) {
            this.vSwitchCidrReservationName = vSwitchCidrReservationName;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchCidrReservationProps#getVSwitchCidrReservationName}
         * @param vSwitchCidrReservationName Property vSwitchCidrReservationName: The name of the reserved CIDR block.
         *                                   The name must be 2 to 128 characters in length and can contain digits, underscores (_), and hyphens (-). It must start with a letter.
         * @return {@code this}
         */
        public Builder vSwitchCidrReservationName(com.aliyun.ros.cdk.core.IResolvable vSwitchCidrReservationName) {
            this.vSwitchCidrReservationName = vSwitchCidrReservationName;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchCidrReservationProps#getVSwitchCidrReservationType}
         * @param vSwitchCidrReservationType Property vSwitchCidrReservationType: The type of reserved CIDR block.
         *                                   Set the value to prefix.
         *                                   Note When a user or a cloud service allocates a CIDR block to an elastic network interface (ENI), the CIDR block must be allocated from the reserved CIDR block. If the reserved CIDR block is exhausted, an error is returned.
         * @return {@code this}
         */
        public Builder vSwitchCidrReservationType(java.lang.String vSwitchCidrReservationType) {
            this.vSwitchCidrReservationType = vSwitchCidrReservationType;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchCidrReservationProps#getVSwitchCidrReservationType}
         * @param vSwitchCidrReservationType Property vSwitchCidrReservationType: The type of reserved CIDR block.
         *                                   Set the value to prefix.
         *                                   Note When a user or a cloud service allocates a CIDR block to an elastic network interface (ENI), the CIDR block must be allocated from the reserved CIDR block. If the reserved CIDR block is exhausted, an error is returned.
         * @return {@code this}
         */
        public Builder vSwitchCidrReservationType(com.aliyun.ros.cdk.core.IResolvable vSwitchCidrReservationType) {
            this.vSwitchCidrReservationType = vSwitchCidrReservationType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VSwitchCidrReservationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VSwitchCidrReservationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link VSwitchCidrReservationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VSwitchCidrReservationProps {
        private final java.lang.Object vSwitchId;
        private final java.lang.Object ipVersion;
        private final java.util.List<com.aliyun.ros.cdk.vpc.RosVSwitchCidrReservation.TagsProperty> tags;
        private final java.lang.Object vSwitchCidrReservationCidr;
        private final java.lang.Object vSwitchCidrReservationDescription;
        private final java.lang.Object vSwitchCidrReservationMask;
        private final java.lang.Object vSwitchCidrReservationName;
        private final java.lang.Object vSwitchCidrReservationType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipVersion = software.amazon.jsii.Kernel.get(this, "ipVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.RosVSwitchCidrReservation.TagsProperty.class)));
            this.vSwitchCidrReservationCidr = software.amazon.jsii.Kernel.get(this, "vSwitchCidrReservationCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchCidrReservationDescription = software.amazon.jsii.Kernel.get(this, "vSwitchCidrReservationDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchCidrReservationMask = software.amazon.jsii.Kernel.get(this, "vSwitchCidrReservationMask", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchCidrReservationName = software.amazon.jsii.Kernel.get(this, "vSwitchCidrReservationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchCidrReservationType = software.amazon.jsii.Kernel.get(this, "vSwitchCidrReservationType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.ipVersion = builder.ipVersion;
            this.tags = (java.util.List<com.aliyun.ros.cdk.vpc.RosVSwitchCidrReservation.TagsProperty>)builder.tags;
            this.vSwitchCidrReservationCidr = builder.vSwitchCidrReservationCidr;
            this.vSwitchCidrReservationDescription = builder.vSwitchCidrReservationDescription;
            this.vSwitchCidrReservationMask = builder.vSwitchCidrReservationMask;
            this.vSwitchCidrReservationName = builder.vSwitchCidrReservationName;
            this.vSwitchCidrReservationType = builder.vSwitchCidrReservationType;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.Object getIpVersion() {
            return this.ipVersion;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.vpc.RosVSwitchCidrReservation.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getVSwitchCidrReservationCidr() {
            return this.vSwitchCidrReservationCidr;
        }

        @Override
        public final java.lang.Object getVSwitchCidrReservationDescription() {
            return this.vSwitchCidrReservationDescription;
        }

        @Override
        public final java.lang.Object getVSwitchCidrReservationMask() {
            return this.vSwitchCidrReservationMask;
        }

        @Override
        public final java.lang.Object getVSwitchCidrReservationName() {
            return this.vSwitchCidrReservationName;
        }

        @Override
        public final java.lang.Object getVSwitchCidrReservationType() {
            return this.vSwitchCidrReservationType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            if (this.getIpVersion() != null) {
                data.set("ipVersion", om.valueToTree(this.getIpVersion()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getVSwitchCidrReservationCidr() != null) {
                data.set("vSwitchCidrReservationCidr", om.valueToTree(this.getVSwitchCidrReservationCidr()));
            }
            if (this.getVSwitchCidrReservationDescription() != null) {
                data.set("vSwitchCidrReservationDescription", om.valueToTree(this.getVSwitchCidrReservationDescription()));
            }
            if (this.getVSwitchCidrReservationMask() != null) {
                data.set("vSwitchCidrReservationMask", om.valueToTree(this.getVSwitchCidrReservationMask()));
            }
            if (this.getVSwitchCidrReservationName() != null) {
                data.set("vSwitchCidrReservationName", om.valueToTree(this.getVSwitchCidrReservationName()));
            }
            if (this.getVSwitchCidrReservationType() != null) {
                data.set("vSwitchCidrReservationType", om.valueToTree(this.getVSwitchCidrReservationType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.VSwitchCidrReservationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VSwitchCidrReservationProps.Jsii$Proxy that = (VSwitchCidrReservationProps.Jsii$Proxy) o;

            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (this.ipVersion != null ? !this.ipVersion.equals(that.ipVersion) : that.ipVersion != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.vSwitchCidrReservationCidr != null ? !this.vSwitchCidrReservationCidr.equals(that.vSwitchCidrReservationCidr) : that.vSwitchCidrReservationCidr != null) return false;
            if (this.vSwitchCidrReservationDescription != null ? !this.vSwitchCidrReservationDescription.equals(that.vSwitchCidrReservationDescription) : that.vSwitchCidrReservationDescription != null) return false;
            if (this.vSwitchCidrReservationMask != null ? !this.vSwitchCidrReservationMask.equals(that.vSwitchCidrReservationMask) : that.vSwitchCidrReservationMask != null) return false;
            if (this.vSwitchCidrReservationName != null ? !this.vSwitchCidrReservationName.equals(that.vSwitchCidrReservationName) : that.vSwitchCidrReservationName != null) return false;
            return this.vSwitchCidrReservationType != null ? this.vSwitchCidrReservationType.equals(that.vSwitchCidrReservationType) : that.vSwitchCidrReservationType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.vSwitchId.hashCode();
            result = 31 * result + (this.ipVersion != null ? this.ipVersion.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.vSwitchCidrReservationCidr != null ? this.vSwitchCidrReservationCidr.hashCode() : 0);
            result = 31 * result + (this.vSwitchCidrReservationDescription != null ? this.vSwitchCidrReservationDescription.hashCode() : 0);
            result = 31 * result + (this.vSwitchCidrReservationMask != null ? this.vSwitchCidrReservationMask.hashCode() : 0);
            result = 31 * result + (this.vSwitchCidrReservationName != null ? this.vSwitchCidrReservationName.hashCode() : 0);
            result = 31 * result + (this.vSwitchCidrReservationType != null ? this.vSwitchCidrReservationType.hashCode() : 0);
            return result;
        }
    }
}
