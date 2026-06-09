package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>RosIpamResourceDiscovery</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipamresourcediscovery
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T14:04:31.565Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosIpamResourceDiscoveryProps")
@software.amazon.jsii.Jsii.Proxy(RosIpamResourceDiscoveryProps.Jsii$Proxy.class)
public interface RosIpamResourceDiscoveryProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOperatingRegionList();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpamResourceDiscoveryDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpamResourceDiscoveryName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.vpc.RosIpamResourceDiscovery.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosIpamResourceDiscoveryProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosIpamResourceDiscoveryProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosIpamResourceDiscoveryProps> {
        java.lang.Object operatingRegionList;
        java.lang.Object ipamResourceDiscoveryDescription;
        java.lang.Object ipamResourceDiscoveryName;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.vpc.RosIpamResourceDiscovery.TagsProperty> tags;

        /**
         * Sets the value of {@link RosIpamResourceDiscoveryProps#getOperatingRegionList}
         * @param operatingRegionList the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder operatingRegionList(com.aliyun.ros.cdk.core.IResolvable operatingRegionList) {
            this.operatingRegionList = operatingRegionList;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamResourceDiscoveryProps#getOperatingRegionList}
         * @param operatingRegionList the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder operatingRegionList(java.util.List<? extends java.lang.Object> operatingRegionList) {
            this.operatingRegionList = operatingRegionList;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamResourceDiscoveryProps#getIpamResourceDiscoveryDescription}
         * @param ipamResourceDiscoveryDescription the value to be set.
         * @return {@code this}
         */
        public Builder ipamResourceDiscoveryDescription(java.lang.String ipamResourceDiscoveryDescription) {
            this.ipamResourceDiscoveryDescription = ipamResourceDiscoveryDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamResourceDiscoveryProps#getIpamResourceDiscoveryDescription}
         * @param ipamResourceDiscoveryDescription the value to be set.
         * @return {@code this}
         */
        public Builder ipamResourceDiscoveryDescription(com.aliyun.ros.cdk.core.IResolvable ipamResourceDiscoveryDescription) {
            this.ipamResourceDiscoveryDescription = ipamResourceDiscoveryDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamResourceDiscoveryProps#getIpamResourceDiscoveryName}
         * @param ipamResourceDiscoveryName the value to be set.
         * @return {@code this}
         */
        public Builder ipamResourceDiscoveryName(java.lang.String ipamResourceDiscoveryName) {
            this.ipamResourceDiscoveryName = ipamResourceDiscoveryName;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamResourceDiscoveryProps#getIpamResourceDiscoveryName}
         * @param ipamResourceDiscoveryName the value to be set.
         * @return {@code this}
         */
        public Builder ipamResourceDiscoveryName(com.aliyun.ros.cdk.core.IResolvable ipamResourceDiscoveryName) {
            this.ipamResourceDiscoveryName = ipamResourceDiscoveryName;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamResourceDiscoveryProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamResourceDiscoveryProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamResourceDiscoveryProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.vpc.RosIpamResourceDiscovery.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.vpc.RosIpamResourceDiscovery.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosIpamResourceDiscoveryProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosIpamResourceDiscoveryProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosIpamResourceDiscoveryProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosIpamResourceDiscoveryProps {
        private final java.lang.Object operatingRegionList;
        private final java.lang.Object ipamResourceDiscoveryDescription;
        private final java.lang.Object ipamResourceDiscoveryName;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.vpc.RosIpamResourceDiscovery.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.operatingRegionList = software.amazon.jsii.Kernel.get(this, "operatingRegionList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipamResourceDiscoveryDescription = software.amazon.jsii.Kernel.get(this, "ipamResourceDiscoveryDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipamResourceDiscoveryName = software.amazon.jsii.Kernel.get(this, "ipamResourceDiscoveryName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.RosIpamResourceDiscovery.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.operatingRegionList = java.util.Objects.requireNonNull(builder.operatingRegionList, "operatingRegionList is required");
            this.ipamResourceDiscoveryDescription = builder.ipamResourceDiscoveryDescription;
            this.ipamResourceDiscoveryName = builder.ipamResourceDiscoveryName;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.vpc.RosIpamResourceDiscovery.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getOperatingRegionList() {
            return this.operatingRegionList;
        }

        @Override
        public final java.lang.Object getIpamResourceDiscoveryDescription() {
            return this.ipamResourceDiscoveryDescription;
        }

        @Override
        public final java.lang.Object getIpamResourceDiscoveryName() {
            return this.ipamResourceDiscoveryName;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.vpc.RosIpamResourceDiscovery.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("operatingRegionList", om.valueToTree(this.getOperatingRegionList()));
            if (this.getIpamResourceDiscoveryDescription() != null) {
                data.set("ipamResourceDiscoveryDescription", om.valueToTree(this.getIpamResourceDiscoveryDescription()));
            }
            if (this.getIpamResourceDiscoveryName() != null) {
                data.set("ipamResourceDiscoveryName", om.valueToTree(this.getIpamResourceDiscoveryName()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosIpamResourceDiscoveryProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosIpamResourceDiscoveryProps.Jsii$Proxy that = (RosIpamResourceDiscoveryProps.Jsii$Proxy) o;

            if (!operatingRegionList.equals(that.operatingRegionList)) return false;
            if (this.ipamResourceDiscoveryDescription != null ? !this.ipamResourceDiscoveryDescription.equals(that.ipamResourceDiscoveryDescription) : that.ipamResourceDiscoveryDescription != null) return false;
            if (this.ipamResourceDiscoveryName != null ? !this.ipamResourceDiscoveryName.equals(that.ipamResourceDiscoveryName) : that.ipamResourceDiscoveryName != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.operatingRegionList.hashCode();
            result = 31 * result + (this.ipamResourceDiscoveryDescription != null ? this.ipamResourceDiscoveryDescription.hashCode() : 0);
            result = 31 * result + (this.ipamResourceDiscoveryName != null ? this.ipamResourceDiscoveryName.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
