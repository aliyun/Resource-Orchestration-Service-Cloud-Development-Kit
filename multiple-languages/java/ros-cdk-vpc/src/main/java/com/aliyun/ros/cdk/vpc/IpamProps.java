package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>Ipam</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipam
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:21.909Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.IpamProps")
@software.amazon.jsii.Jsii.Proxy(IpamProps.Jsii$Proxy.class)
public interface IpamProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property operatingRegionList: List of IPAM effective regions.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOperatingRegionList();

    /**
     * Property ipamDescription: The description of IPAM.
     * <p>
     * It must be 2 to 256 characters in length and must start with an uppercase letter or a Chinese character, but cannot start with 'http:// 'or 'https. If the description is not filled in, it is blank. The default value is blank.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpamDescription() {
        return null;
    }

    /**
     * Property ipamName: The name of the IPAM.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpamName() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property tags: Tags of ipam.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.vpc.RosIpam.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link IpamProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link IpamProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<IpamProps> {
        java.lang.Object operatingRegionList;
        java.lang.Object ipamDescription;
        java.lang.Object ipamName;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.vpc.RosIpam.TagsProperty> tags;

        /**
         * Sets the value of {@link IpamProps#getOperatingRegionList}
         * @param operatingRegionList Property operatingRegionList: List of IPAM effective regions. This parameter is required.
         * @return {@code this}
         */
        public Builder operatingRegionList(com.aliyun.ros.cdk.core.IResolvable operatingRegionList) {
            this.operatingRegionList = operatingRegionList;
            return this;
        }

        /**
         * Sets the value of {@link IpamProps#getOperatingRegionList}
         * @param operatingRegionList Property operatingRegionList: List of IPAM effective regions. This parameter is required.
         * @return {@code this}
         */
        public Builder operatingRegionList(java.util.List<? extends java.lang.Object> operatingRegionList) {
            this.operatingRegionList = operatingRegionList;
            return this;
        }

        /**
         * Sets the value of {@link IpamProps#getIpamDescription}
         * @param ipamDescription Property ipamDescription: The description of IPAM.
         *                        It must be 2 to 256 characters in length and must start with an uppercase letter or a Chinese character, but cannot start with 'http:// 'or 'https. If the description is not filled in, it is blank. The default value is blank.
         * @return {@code this}
         */
        public Builder ipamDescription(java.lang.String ipamDescription) {
            this.ipamDescription = ipamDescription;
            return this;
        }

        /**
         * Sets the value of {@link IpamProps#getIpamDescription}
         * @param ipamDescription Property ipamDescription: The description of IPAM.
         *                        It must be 2 to 256 characters in length and must start with an uppercase letter or a Chinese character, but cannot start with 'http:// 'or 'https. If the description is not filled in, it is blank. The default value is blank.
         * @return {@code this}
         */
        public Builder ipamDescription(com.aliyun.ros.cdk.core.IResolvable ipamDescription) {
            this.ipamDescription = ipamDescription;
            return this;
        }

        /**
         * Sets the value of {@link IpamProps#getIpamName}
         * @param ipamName Property ipamName: The name of the IPAM.
         * @return {@code this}
         */
        public Builder ipamName(java.lang.String ipamName) {
            this.ipamName = ipamName;
            return this;
        }

        /**
         * Sets the value of {@link IpamProps#getIpamName}
         * @param ipamName Property ipamName: The name of the IPAM.
         * @return {@code this}
         */
        public Builder ipamName(com.aliyun.ros.cdk.core.IResolvable ipamName) {
            this.ipamName = ipamName;
            return this;
        }

        /**
         * Sets the value of {@link IpamProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link IpamProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link IpamProps#getTags}
         * @param tags Property tags: Tags of ipam.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.vpc.RosIpam.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.vpc.RosIpam.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link IpamProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public IpamProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link IpamProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements IpamProps {
        private final java.lang.Object operatingRegionList;
        private final java.lang.Object ipamDescription;
        private final java.lang.Object ipamName;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.vpc.RosIpam.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.operatingRegionList = software.amazon.jsii.Kernel.get(this, "operatingRegionList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipamDescription = software.amazon.jsii.Kernel.get(this, "ipamDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipamName = software.amazon.jsii.Kernel.get(this, "ipamName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.RosIpam.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.operatingRegionList = java.util.Objects.requireNonNull(builder.operatingRegionList, "operatingRegionList is required");
            this.ipamDescription = builder.ipamDescription;
            this.ipamName = builder.ipamName;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.vpc.RosIpam.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getOperatingRegionList() {
            return this.operatingRegionList;
        }

        @Override
        public final java.lang.Object getIpamDescription() {
            return this.ipamDescription;
        }

        @Override
        public final java.lang.Object getIpamName() {
            return this.ipamName;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.vpc.RosIpam.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("operatingRegionList", om.valueToTree(this.getOperatingRegionList()));
            if (this.getIpamDescription() != null) {
                data.set("ipamDescription", om.valueToTree(this.getIpamDescription()));
            }
            if (this.getIpamName() != null) {
                data.set("ipamName", om.valueToTree(this.getIpamName()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.IpamProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            IpamProps.Jsii$Proxy that = (IpamProps.Jsii$Proxy) o;

            if (!operatingRegionList.equals(that.operatingRegionList)) return false;
            if (this.ipamDescription != null ? !this.ipamDescription.equals(that.ipamDescription) : that.ipamDescription != null) return false;
            if (this.ipamName != null ? !this.ipamName.equals(that.ipamName) : that.ipamName != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.operatingRegionList.hashCode();
            result = 31 * result + (this.ipamDescription != null ? this.ipamDescription.hashCode() : 0);
            result = 31 * result + (this.ipamName != null ? this.ipamName.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
