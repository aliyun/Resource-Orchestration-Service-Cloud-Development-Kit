package com.aliyun.ros.cdk.hbr;

/**
 * Properties for defining a <code>RosCrossAccount</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-crossaccount
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:51.211Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.RosCrossAccountProps")
@software.amazon.jsii.Jsii.Proxy(RosCrossAccountProps.Jsii$Proxy.class)
public interface RosCrossAccountProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAlias() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCrossAccountRoleName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCrossAccountType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCrossAccountUserId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosCrossAccountProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosCrossAccountProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosCrossAccountProps> {
        java.lang.Object alias;
        java.lang.Object crossAccountRoleName;
        java.lang.Object crossAccountType;
        java.lang.Object crossAccountUserId;

        /**
         * Sets the value of {@link RosCrossAccountProps#getAlias}
         * @param alias the value to be set.
         * @return {@code this}
         */
        public Builder alias(java.lang.String alias) {
            this.alias = alias;
            return this;
        }

        /**
         * Sets the value of {@link RosCrossAccountProps#getAlias}
         * @param alias the value to be set.
         * @return {@code this}
         */
        public Builder alias(com.aliyun.ros.cdk.core.IResolvable alias) {
            this.alias = alias;
            return this;
        }

        /**
         * Sets the value of {@link RosCrossAccountProps#getCrossAccountRoleName}
         * @param crossAccountRoleName the value to be set.
         * @return {@code this}
         */
        public Builder crossAccountRoleName(java.lang.String crossAccountRoleName) {
            this.crossAccountRoleName = crossAccountRoleName;
            return this;
        }

        /**
         * Sets the value of {@link RosCrossAccountProps#getCrossAccountRoleName}
         * @param crossAccountRoleName the value to be set.
         * @return {@code this}
         */
        public Builder crossAccountRoleName(com.aliyun.ros.cdk.core.IResolvable crossAccountRoleName) {
            this.crossAccountRoleName = crossAccountRoleName;
            return this;
        }

        /**
         * Sets the value of {@link RosCrossAccountProps#getCrossAccountType}
         * @param crossAccountType the value to be set.
         * @return {@code this}
         */
        public Builder crossAccountType(java.lang.String crossAccountType) {
            this.crossAccountType = crossAccountType;
            return this;
        }

        /**
         * Sets the value of {@link RosCrossAccountProps#getCrossAccountType}
         * @param crossAccountType the value to be set.
         * @return {@code this}
         */
        public Builder crossAccountType(com.aliyun.ros.cdk.core.IResolvable crossAccountType) {
            this.crossAccountType = crossAccountType;
            return this;
        }

        /**
         * Sets the value of {@link RosCrossAccountProps#getCrossAccountUserId}
         * @param crossAccountUserId the value to be set.
         * @return {@code this}
         */
        public Builder crossAccountUserId(java.lang.Number crossAccountUserId) {
            this.crossAccountUserId = crossAccountUserId;
            return this;
        }

        /**
         * Sets the value of {@link RosCrossAccountProps#getCrossAccountUserId}
         * @param crossAccountUserId the value to be set.
         * @return {@code this}
         */
        public Builder crossAccountUserId(com.aliyun.ros.cdk.core.IResolvable crossAccountUserId) {
            this.crossAccountUserId = crossAccountUserId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosCrossAccountProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosCrossAccountProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosCrossAccountProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosCrossAccountProps {
        private final java.lang.Object alias;
        private final java.lang.Object crossAccountRoleName;
        private final java.lang.Object crossAccountType;
        private final java.lang.Object crossAccountUserId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.alias = software.amazon.jsii.Kernel.get(this, "alias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.crossAccountRoleName = software.amazon.jsii.Kernel.get(this, "crossAccountRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.crossAccountType = software.amazon.jsii.Kernel.get(this, "crossAccountType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.crossAccountUserId = software.amazon.jsii.Kernel.get(this, "crossAccountUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.alias = builder.alias;
            this.crossAccountRoleName = builder.crossAccountRoleName;
            this.crossAccountType = builder.crossAccountType;
            this.crossAccountUserId = builder.crossAccountUserId;
        }

        @Override
        public final java.lang.Object getAlias() {
            return this.alias;
        }

        @Override
        public final java.lang.Object getCrossAccountRoleName() {
            return this.crossAccountRoleName;
        }

        @Override
        public final java.lang.Object getCrossAccountType() {
            return this.crossAccountType;
        }

        @Override
        public final java.lang.Object getCrossAccountUserId() {
            return this.crossAccountUserId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAlias() != null) {
                data.set("alias", om.valueToTree(this.getAlias()));
            }
            if (this.getCrossAccountRoleName() != null) {
                data.set("crossAccountRoleName", om.valueToTree(this.getCrossAccountRoleName()));
            }
            if (this.getCrossAccountType() != null) {
                data.set("crossAccountType", om.valueToTree(this.getCrossAccountType()));
            }
            if (this.getCrossAccountUserId() != null) {
                data.set("crossAccountUserId", om.valueToTree(this.getCrossAccountUserId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-hbr.RosCrossAccountProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosCrossAccountProps.Jsii$Proxy that = (RosCrossAccountProps.Jsii$Proxy) o;

            if (this.alias != null ? !this.alias.equals(that.alias) : that.alias != null) return false;
            if (this.crossAccountRoleName != null ? !this.crossAccountRoleName.equals(that.crossAccountRoleName) : that.crossAccountRoleName != null) return false;
            if (this.crossAccountType != null ? !this.crossAccountType.equals(that.crossAccountType) : that.crossAccountType != null) return false;
            return this.crossAccountUserId != null ? this.crossAccountUserId.equals(that.crossAccountUserId) : that.crossAccountUserId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.alias != null ? this.alias.hashCode() : 0;
            result = 31 * result + (this.crossAccountRoleName != null ? this.crossAccountRoleName.hashCode() : 0);
            result = 31 * result + (this.crossAccountType != null ? this.crossAccountType.hashCode() : 0);
            result = 31 * result + (this.crossAccountUserId != null ? this.crossAccountUserId.hashCode() : 0);
            return result;
        }
    }
}
