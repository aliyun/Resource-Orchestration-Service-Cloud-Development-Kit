package com.aliyun.ros.cdk.alb;

/**
 * Properties for defining a <code>RosAclAssociation</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-aclassociation
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:01.305Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosAclAssociationProps")
@software.amazon.jsii.Jsii.Proxy(RosAclAssociationProps.Jsii$Proxy.class)
public interface RosAclAssociationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAclIds();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAclType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getListenerId();

    /**
     * @return a {@link Builder} of {@link RosAclAssociationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAclAssociationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAclAssociationProps> {
        java.lang.Object aclIds;
        java.lang.Object aclType;
        java.lang.Object listenerId;

        /**
         * Sets the value of {@link RosAclAssociationProps#getAclIds}
         * @param aclIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder aclIds(com.aliyun.ros.cdk.core.IResolvable aclIds) {
            this.aclIds = aclIds;
            return this;
        }

        /**
         * Sets the value of {@link RosAclAssociationProps#getAclIds}
         * @param aclIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder aclIds(java.util.List<? extends java.lang.Object> aclIds) {
            this.aclIds = aclIds;
            return this;
        }

        /**
         * Sets the value of {@link RosAclAssociationProps#getAclType}
         * @param aclType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder aclType(java.lang.String aclType) {
            this.aclType = aclType;
            return this;
        }

        /**
         * Sets the value of {@link RosAclAssociationProps#getAclType}
         * @param aclType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder aclType(com.aliyun.ros.cdk.core.IResolvable aclType) {
            this.aclType = aclType;
            return this;
        }

        /**
         * Sets the value of {@link RosAclAssociationProps#getListenerId}
         * @param listenerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerId(java.lang.String listenerId) {
            this.listenerId = listenerId;
            return this;
        }

        /**
         * Sets the value of {@link RosAclAssociationProps#getListenerId}
         * @param listenerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerId(com.aliyun.ros.cdk.core.IResolvable listenerId) {
            this.listenerId = listenerId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAclAssociationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAclAssociationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAclAssociationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAclAssociationProps {
        private final java.lang.Object aclIds;
        private final java.lang.Object aclType;
        private final java.lang.Object listenerId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.aclIds = software.amazon.jsii.Kernel.get(this, "aclIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aclType = software.amazon.jsii.Kernel.get(this, "aclType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.listenerId = software.amazon.jsii.Kernel.get(this, "listenerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.aclIds = java.util.Objects.requireNonNull(builder.aclIds, "aclIds is required");
            this.aclType = java.util.Objects.requireNonNull(builder.aclType, "aclType is required");
            this.listenerId = java.util.Objects.requireNonNull(builder.listenerId, "listenerId is required");
        }

        @Override
        public final java.lang.Object getAclIds() {
            return this.aclIds;
        }

        @Override
        public final java.lang.Object getAclType() {
            return this.aclType;
        }

        @Override
        public final java.lang.Object getListenerId() {
            return this.listenerId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("aclIds", om.valueToTree(this.getAclIds()));
            data.set("aclType", om.valueToTree(this.getAclType()));
            data.set("listenerId", om.valueToTree(this.getListenerId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosAclAssociationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAclAssociationProps.Jsii$Proxy that = (RosAclAssociationProps.Jsii$Proxy) o;

            if (!aclIds.equals(that.aclIds)) return false;
            if (!aclType.equals(that.aclType)) return false;
            return this.listenerId.equals(that.listenerId);
        }

        @Override
        public final int hashCode() {
            int result = this.aclIds.hashCode();
            result = 31 * result + (this.aclType.hashCode());
            result = 31 * result + (this.listenerId.hashCode());
            return result;
        }
    }
}
