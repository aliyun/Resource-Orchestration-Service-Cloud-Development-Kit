package com.aliyun.ros.cdk.dms;

/**
 * Properties for defining a <code>RosScriptExecution</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dms-scriptexecution
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:54.563Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dms.$Module.class, fqn = "@alicloud/ros-cdk-dms.RosScriptExecutionProps")
@software.amazon.jsii.Jsii.Proxy(RosScriptExecutionProps.Jsii$Proxy.class)
public interface RosScriptExecutionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLogic();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getScript();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTid() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosScriptExecutionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosScriptExecutionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosScriptExecutionProps> {
        java.lang.Object dbId;
        java.lang.Object logic;
        java.lang.Object script;
        java.lang.Object tid;

        /**
         * Sets the value of {@link RosScriptExecutionProps#getDbId}
         * @param dbId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbId(java.lang.Number dbId) {
            this.dbId = dbId;
            return this;
        }

        /**
         * Sets the value of {@link RosScriptExecutionProps#getDbId}
         * @param dbId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbId(com.aliyun.ros.cdk.core.IResolvable dbId) {
            this.dbId = dbId;
            return this;
        }

        /**
         * Sets the value of {@link RosScriptExecutionProps#getLogic}
         * @param logic the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logic(java.lang.Boolean logic) {
            this.logic = logic;
            return this;
        }

        /**
         * Sets the value of {@link RosScriptExecutionProps#getLogic}
         * @param logic the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logic(com.aliyun.ros.cdk.core.IResolvable logic) {
            this.logic = logic;
            return this;
        }

        /**
         * Sets the value of {@link RosScriptExecutionProps#getScript}
         * @param script the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder script(java.lang.String script) {
            this.script = script;
            return this;
        }

        /**
         * Sets the value of {@link RosScriptExecutionProps#getScript}
         * @param script the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder script(com.aliyun.ros.cdk.core.IResolvable script) {
            this.script = script;
            return this;
        }

        /**
         * Sets the value of {@link RosScriptExecutionProps#getTid}
         * @param tid the value to be set.
         * @return {@code this}
         */
        public Builder tid(java.lang.Number tid) {
            this.tid = tid;
            return this;
        }

        /**
         * Sets the value of {@link RosScriptExecutionProps#getTid}
         * @param tid the value to be set.
         * @return {@code this}
         */
        public Builder tid(com.aliyun.ros.cdk.core.IResolvable tid) {
            this.tid = tid;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosScriptExecutionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosScriptExecutionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosScriptExecutionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosScriptExecutionProps {
        private final java.lang.Object dbId;
        private final java.lang.Object logic;
        private final java.lang.Object script;
        private final java.lang.Object tid;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbId = software.amazon.jsii.Kernel.get(this, "dbId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logic = software.amazon.jsii.Kernel.get(this, "logic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.script = software.amazon.jsii.Kernel.get(this, "script", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tid = software.amazon.jsii.Kernel.get(this, "tid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbId = java.util.Objects.requireNonNull(builder.dbId, "dbId is required");
            this.logic = java.util.Objects.requireNonNull(builder.logic, "logic is required");
            this.script = java.util.Objects.requireNonNull(builder.script, "script is required");
            this.tid = builder.tid;
        }

        @Override
        public final java.lang.Object getDbId() {
            return this.dbId;
        }

        @Override
        public final java.lang.Object getLogic() {
            return this.logic;
        }

        @Override
        public final java.lang.Object getScript() {
            return this.script;
        }

        @Override
        public final java.lang.Object getTid() {
            return this.tid;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbId", om.valueToTree(this.getDbId()));
            data.set("logic", om.valueToTree(this.getLogic()));
            data.set("script", om.valueToTree(this.getScript()));
            if (this.getTid() != null) {
                data.set("tid", om.valueToTree(this.getTid()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dms.RosScriptExecutionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosScriptExecutionProps.Jsii$Proxy that = (RosScriptExecutionProps.Jsii$Proxy) o;

            if (!dbId.equals(that.dbId)) return false;
            if (!logic.equals(that.logic)) return false;
            if (!script.equals(that.script)) return false;
            return this.tid != null ? this.tid.equals(that.tid) : that.tid == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbId.hashCode();
            result = 31 * result + (this.logic.hashCode());
            result = 31 * result + (this.script.hashCode());
            result = 31 * result + (this.tid != null ? this.tid.hashCode() : 0);
            return result;
        }
    }
}
