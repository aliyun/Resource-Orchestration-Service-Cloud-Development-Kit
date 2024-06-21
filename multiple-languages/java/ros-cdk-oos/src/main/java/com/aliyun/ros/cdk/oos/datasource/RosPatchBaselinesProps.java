package com.aliyun.ros.cdk.oos.datasource;

/**
 * Properties for defining a <code>RosPatchBaselines</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaselines
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:11.204Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.datasource.RosPatchBaselinesProps")
@software.amazon.jsii.Jsii.Proxy(RosPatchBaselinesProps.Jsii$Proxy.class)
public interface RosPatchBaselinesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOperationSystem() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPatchBaselineName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getShareType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosPatchBaselinesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosPatchBaselinesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosPatchBaselinesProps> {
        java.lang.Object operationSystem;
        java.lang.Object patchBaselineName;
        java.lang.Object shareType;

        /**
         * Sets the value of {@link RosPatchBaselinesProps#getOperationSystem}
         * @param operationSystem the value to be set.
         * @return {@code this}
         */
        public Builder operationSystem(java.lang.String operationSystem) {
            this.operationSystem = operationSystem;
            return this;
        }

        /**
         * Sets the value of {@link RosPatchBaselinesProps#getOperationSystem}
         * @param operationSystem the value to be set.
         * @return {@code this}
         */
        public Builder operationSystem(com.aliyun.ros.cdk.core.IResolvable operationSystem) {
            this.operationSystem = operationSystem;
            return this;
        }

        /**
         * Sets the value of {@link RosPatchBaselinesProps#getPatchBaselineName}
         * @param patchBaselineName the value to be set.
         * @return {@code this}
         */
        public Builder patchBaselineName(java.lang.String patchBaselineName) {
            this.patchBaselineName = patchBaselineName;
            return this;
        }

        /**
         * Sets the value of {@link RosPatchBaselinesProps#getPatchBaselineName}
         * @param patchBaselineName the value to be set.
         * @return {@code this}
         */
        public Builder patchBaselineName(com.aliyun.ros.cdk.core.IResolvable patchBaselineName) {
            this.patchBaselineName = patchBaselineName;
            return this;
        }

        /**
         * Sets the value of {@link RosPatchBaselinesProps#getShareType}
         * @param shareType the value to be set.
         * @return {@code this}
         */
        public Builder shareType(java.lang.String shareType) {
            this.shareType = shareType;
            return this;
        }

        /**
         * Sets the value of {@link RosPatchBaselinesProps#getShareType}
         * @param shareType the value to be set.
         * @return {@code this}
         */
        public Builder shareType(com.aliyun.ros.cdk.core.IResolvable shareType) {
            this.shareType = shareType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosPatchBaselinesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosPatchBaselinesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosPatchBaselinesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosPatchBaselinesProps {
        private final java.lang.Object operationSystem;
        private final java.lang.Object patchBaselineName;
        private final java.lang.Object shareType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.operationSystem = software.amazon.jsii.Kernel.get(this, "operationSystem", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.patchBaselineName = software.amazon.jsii.Kernel.get(this, "patchBaselineName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.shareType = software.amazon.jsii.Kernel.get(this, "shareType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.operationSystem = builder.operationSystem;
            this.patchBaselineName = builder.patchBaselineName;
            this.shareType = builder.shareType;
        }

        @Override
        public final java.lang.Object getOperationSystem() {
            return this.operationSystem;
        }

        @Override
        public final java.lang.Object getPatchBaselineName() {
            return this.patchBaselineName;
        }

        @Override
        public final java.lang.Object getShareType() {
            return this.shareType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getOperationSystem() != null) {
                data.set("operationSystem", om.valueToTree(this.getOperationSystem()));
            }
            if (this.getPatchBaselineName() != null) {
                data.set("patchBaselineName", om.valueToTree(this.getPatchBaselineName()));
            }
            if (this.getShareType() != null) {
                data.set("shareType", om.valueToTree(this.getShareType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oos.datasource.RosPatchBaselinesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosPatchBaselinesProps.Jsii$Proxy that = (RosPatchBaselinesProps.Jsii$Proxy) o;

            if (this.operationSystem != null ? !this.operationSystem.equals(that.operationSystem) : that.operationSystem != null) return false;
            if (this.patchBaselineName != null ? !this.patchBaselineName.equals(that.patchBaselineName) : that.patchBaselineName != null) return false;
            return this.shareType != null ? this.shareType.equals(that.shareType) : that.shareType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.operationSystem != null ? this.operationSystem.hashCode() : 0;
            result = 31 * result + (this.patchBaselineName != null ? this.patchBaselineName.hashCode() : 0);
            result = 31 * result + (this.shareType != null ? this.shareType.hashCode() : 0);
            return result;
        }
    }
}
