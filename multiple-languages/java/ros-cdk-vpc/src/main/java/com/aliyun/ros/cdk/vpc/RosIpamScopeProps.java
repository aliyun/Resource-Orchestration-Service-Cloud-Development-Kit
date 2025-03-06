package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>RosIpamScope</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipamscope
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:11.410Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosIpamScopeProps")
@software.amazon.jsii.Jsii.Proxy(RosIpamScopeProps.Jsii$Proxy.class)
public interface RosIpamScopeProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getIpamId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpamScopeDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpamScopeName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpamScopeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.vpc.RosIpamScope.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosIpamScopeProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosIpamScopeProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosIpamScopeProps> {
        java.lang.Object ipamId;
        java.lang.Object ipamScopeDescription;
        java.lang.Object ipamScopeName;
        java.lang.Object ipamScopeType;
        java.util.List<com.aliyun.ros.cdk.vpc.RosIpamScope.TagsProperty> tags;

        /**
         * Sets the value of {@link RosIpamScopeProps#getIpamId}
         * @param ipamId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ipamId(java.lang.String ipamId) {
            this.ipamId = ipamId;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamScopeProps#getIpamId}
         * @param ipamId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ipamId(com.aliyun.ros.cdk.core.IResolvable ipamId) {
            this.ipamId = ipamId;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamScopeProps#getIpamScopeDescription}
         * @param ipamScopeDescription the value to be set.
         * @return {@code this}
         */
        public Builder ipamScopeDescription(java.lang.String ipamScopeDescription) {
            this.ipamScopeDescription = ipamScopeDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamScopeProps#getIpamScopeDescription}
         * @param ipamScopeDescription the value to be set.
         * @return {@code this}
         */
        public Builder ipamScopeDescription(com.aliyun.ros.cdk.core.IResolvable ipamScopeDescription) {
            this.ipamScopeDescription = ipamScopeDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamScopeProps#getIpamScopeName}
         * @param ipamScopeName the value to be set.
         * @return {@code this}
         */
        public Builder ipamScopeName(java.lang.String ipamScopeName) {
            this.ipamScopeName = ipamScopeName;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamScopeProps#getIpamScopeName}
         * @param ipamScopeName the value to be set.
         * @return {@code this}
         */
        public Builder ipamScopeName(com.aliyun.ros.cdk.core.IResolvable ipamScopeName) {
            this.ipamScopeName = ipamScopeName;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamScopeProps#getIpamScopeType}
         * @param ipamScopeType the value to be set.
         * @return {@code this}
         */
        public Builder ipamScopeType(java.lang.String ipamScopeType) {
            this.ipamScopeType = ipamScopeType;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamScopeProps#getIpamScopeType}
         * @param ipamScopeType the value to be set.
         * @return {@code this}
         */
        public Builder ipamScopeType(com.aliyun.ros.cdk.core.IResolvable ipamScopeType) {
            this.ipamScopeType = ipamScopeType;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamScopeProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.vpc.RosIpamScope.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.vpc.RosIpamScope.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosIpamScopeProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosIpamScopeProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosIpamScopeProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosIpamScopeProps {
        private final java.lang.Object ipamId;
        private final java.lang.Object ipamScopeDescription;
        private final java.lang.Object ipamScopeName;
        private final java.lang.Object ipamScopeType;
        private final java.util.List<com.aliyun.ros.cdk.vpc.RosIpamScope.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ipamId = software.amazon.jsii.Kernel.get(this, "ipamId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipamScopeDescription = software.amazon.jsii.Kernel.get(this, "ipamScopeDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipamScopeName = software.amazon.jsii.Kernel.get(this, "ipamScopeName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipamScopeType = software.amazon.jsii.Kernel.get(this, "ipamScopeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.RosIpamScope.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ipamId = java.util.Objects.requireNonNull(builder.ipamId, "ipamId is required");
            this.ipamScopeDescription = builder.ipamScopeDescription;
            this.ipamScopeName = builder.ipamScopeName;
            this.ipamScopeType = builder.ipamScopeType;
            this.tags = (java.util.List<com.aliyun.ros.cdk.vpc.RosIpamScope.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getIpamId() {
            return this.ipamId;
        }

        @Override
        public final java.lang.Object getIpamScopeDescription() {
            return this.ipamScopeDescription;
        }

        @Override
        public final java.lang.Object getIpamScopeName() {
            return this.ipamScopeName;
        }

        @Override
        public final java.lang.Object getIpamScopeType() {
            return this.ipamScopeType;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.vpc.RosIpamScope.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("ipamId", om.valueToTree(this.getIpamId()));
            if (this.getIpamScopeDescription() != null) {
                data.set("ipamScopeDescription", om.valueToTree(this.getIpamScopeDescription()));
            }
            if (this.getIpamScopeName() != null) {
                data.set("ipamScopeName", om.valueToTree(this.getIpamScopeName()));
            }
            if (this.getIpamScopeType() != null) {
                data.set("ipamScopeType", om.valueToTree(this.getIpamScopeType()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosIpamScopeProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosIpamScopeProps.Jsii$Proxy that = (RosIpamScopeProps.Jsii$Proxy) o;

            if (!ipamId.equals(that.ipamId)) return false;
            if (this.ipamScopeDescription != null ? !this.ipamScopeDescription.equals(that.ipamScopeDescription) : that.ipamScopeDescription != null) return false;
            if (this.ipamScopeName != null ? !this.ipamScopeName.equals(that.ipamScopeName) : that.ipamScopeName != null) return false;
            if (this.ipamScopeType != null ? !this.ipamScopeType.equals(that.ipamScopeType) : that.ipamScopeType != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.ipamId.hashCode();
            result = 31 * result + (this.ipamScopeDescription != null ? this.ipamScopeDescription.hashCode() : 0);
            result = 31 * result + (this.ipamScopeName != null ? this.ipamScopeName.hashCode() : 0);
            result = 31 * result + (this.ipamScopeType != null ? this.ipamScopeType.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
