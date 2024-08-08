package com.aliyun.ros.cdk.ddospro;

/**
 * Properties for defining a <code>RosSceneDefensePolicy</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-scenedefensepolicy
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:09.051Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ddospro.$Module.class, fqn = "@alicloud/ros-cdk-ddospro.RosSceneDefensePolicyProps")
@software.amazon.jsii.Jsii.Proxy(RosSceneDefensePolicyProps.Jsii$Proxy.class)
public interface RosSceneDefensePolicyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEndTime();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStartTime();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTemplate();

    /**
     * @return a {@link Builder} of {@link RosSceneDefensePolicyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSceneDefensePolicyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSceneDefensePolicyProps> {
        java.lang.Object endTime;
        java.lang.Object name;
        java.lang.Object startTime;
        java.lang.Object template;

        /**
         * Sets the value of {@link RosSceneDefensePolicyProps#getEndTime}
         * @param endTime the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder endTime(java.lang.Number endTime) {
            this.endTime = endTime;
            return this;
        }

        /**
         * Sets the value of {@link RosSceneDefensePolicyProps#getEndTime}
         * @param endTime the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder endTime(com.aliyun.ros.cdk.core.IResolvable endTime) {
            this.endTime = endTime;
            return this;
        }

        /**
         * Sets the value of {@link RosSceneDefensePolicyProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosSceneDefensePolicyProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosSceneDefensePolicyProps#getStartTime}
         * @param startTime the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder startTime(java.lang.Number startTime) {
            this.startTime = startTime;
            return this;
        }

        /**
         * Sets the value of {@link RosSceneDefensePolicyProps#getStartTime}
         * @param startTime the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder startTime(com.aliyun.ros.cdk.core.IResolvable startTime) {
            this.startTime = startTime;
            return this;
        }

        /**
         * Sets the value of {@link RosSceneDefensePolicyProps#getTemplate}
         * @param template the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder template(java.lang.String template) {
            this.template = template;
            return this;
        }

        /**
         * Sets the value of {@link RosSceneDefensePolicyProps#getTemplate}
         * @param template the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder template(com.aliyun.ros.cdk.core.IResolvable template) {
            this.template = template;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSceneDefensePolicyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSceneDefensePolicyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSceneDefensePolicyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSceneDefensePolicyProps {
        private final java.lang.Object endTime;
        private final java.lang.Object name;
        private final java.lang.Object startTime;
        private final java.lang.Object template;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.endTime = software.amazon.jsii.Kernel.get(this, "endTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.startTime = software.amazon.jsii.Kernel.get(this, "startTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.template = software.amazon.jsii.Kernel.get(this, "template", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.endTime = java.util.Objects.requireNonNull(builder.endTime, "endTime is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.startTime = java.util.Objects.requireNonNull(builder.startTime, "startTime is required");
            this.template = java.util.Objects.requireNonNull(builder.template, "template is required");
        }

        @Override
        public final java.lang.Object getEndTime() {
            return this.endTime;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getStartTime() {
            return this.startTime;
        }

        @Override
        public final java.lang.Object getTemplate() {
            return this.template;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("endTime", om.valueToTree(this.getEndTime()));
            data.set("name", om.valueToTree(this.getName()));
            data.set("startTime", om.valueToTree(this.getStartTime()));
            data.set("template", om.valueToTree(this.getTemplate()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ddospro.RosSceneDefensePolicyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSceneDefensePolicyProps.Jsii$Proxy that = (RosSceneDefensePolicyProps.Jsii$Proxy) o;

            if (!endTime.equals(that.endTime)) return false;
            if (!name.equals(that.name)) return false;
            if (!startTime.equals(that.startTime)) return false;
            return this.template.equals(that.template);
        }

        @Override
        public final int hashCode() {
            int result = this.endTime.hashCode();
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.startTime.hashCode());
            result = 31 * result + (this.template.hashCode());
            return result;
        }
    }
}
