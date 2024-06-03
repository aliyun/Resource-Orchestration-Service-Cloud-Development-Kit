package com.aliyun.ros.cdk.cloudphone;

/**
 * Properties for defining a <code>RunCommand</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-runcommand
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:50.180Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudphone.$Module.class, fqn = "@alicloud/ros-cdk-cloudphone.RunCommandProps")
@software.amazon.jsii.Jsii.Proxy(RunCommandProps.Jsii$Proxy.class)
public interface RunCommandProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property command: The command to be executed.
     * <p>
     * The maximum length of a command is 1024 bytes, and only supports lowercase letters, numbers, downline (_), points (.), Slanting (/), colon (:), medium line (-).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCommand();

    /**
     * Property instanceIds: ID of the instance executing the command.
     * <p>
     * Range of n: 1 ~ 10
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceIds();

    /**
     * Property runAgainOn: The stage of executing the command again.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRunAgainOn() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RunCommandProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RunCommandProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RunCommandProps> {
        java.lang.Object command;
        java.lang.Object instanceIds;
        java.lang.Object runAgainOn;

        /**
         * Sets the value of {@link RunCommandProps#getCommand}
         * @param command Property command: The command to be executed. This parameter is required.
         *                The maximum length of a command is 1024 bytes, and only supports lowercase letters, numbers, downline (_), points (.), Slanting (/), colon (:), medium line (-).
         * @return {@code this}
         */
        public Builder command(java.lang.String command) {
            this.command = command;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getCommand}
         * @param command Property command: The command to be executed. This parameter is required.
         *                The maximum length of a command is 1024 bytes, and only supports lowercase letters, numbers, downline (_), points (.), Slanting (/), colon (:), medium line (-).
         * @return {@code this}
         */
        public Builder command(com.aliyun.ros.cdk.core.IResolvable command) {
            this.command = command;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getInstanceIds}
         * @param instanceIds Property instanceIds: ID of the instance executing the command. This parameter is required.
         *                    Range of n: 1 ~ 10
         * @return {@code this}
         */
        public Builder instanceIds(com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getInstanceIds}
         * @param instanceIds Property instanceIds: ID of the instance executing the command. This parameter is required.
         *                    Range of n: 1 ~ 10
         * @return {@code this}
         */
        public Builder instanceIds(java.util.List<? extends java.lang.Object> instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getRunAgainOn}
         * @param runAgainOn Property runAgainOn: The stage of executing the command again.
         * @return {@code this}
         */
        public Builder runAgainOn(com.aliyun.ros.cdk.core.IResolvable runAgainOn) {
            this.runAgainOn = runAgainOn;
            return this;
        }

        /**
         * Sets the value of {@link RunCommandProps#getRunAgainOn}
         * @param runAgainOn Property runAgainOn: The stage of executing the command again.
         * @return {@code this}
         */
        public Builder runAgainOn(java.util.List<? extends java.lang.Object> runAgainOn) {
            this.runAgainOn = runAgainOn;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RunCommandProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RunCommandProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RunCommandProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RunCommandProps {
        private final java.lang.Object command;
        private final java.lang.Object instanceIds;
        private final java.lang.Object runAgainOn;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.command = software.amazon.jsii.Kernel.get(this, "command", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceIds = software.amazon.jsii.Kernel.get(this, "instanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.runAgainOn = software.amazon.jsii.Kernel.get(this, "runAgainOn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.command = java.util.Objects.requireNonNull(builder.command, "command is required");
            this.instanceIds = java.util.Objects.requireNonNull(builder.instanceIds, "instanceIds is required");
            this.runAgainOn = builder.runAgainOn;
        }

        @Override
        public final java.lang.Object getCommand() {
            return this.command;
        }

        @Override
        public final java.lang.Object getInstanceIds() {
            return this.instanceIds;
        }

        @Override
        public final java.lang.Object getRunAgainOn() {
            return this.runAgainOn;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("command", om.valueToTree(this.getCommand()));
            data.set("instanceIds", om.valueToTree(this.getInstanceIds()));
            if (this.getRunAgainOn() != null) {
                data.set("runAgainOn", om.valueToTree(this.getRunAgainOn()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudphone.RunCommandProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RunCommandProps.Jsii$Proxy that = (RunCommandProps.Jsii$Proxy) o;

            if (!command.equals(that.command)) return false;
            if (!instanceIds.equals(that.instanceIds)) return false;
            return this.runAgainOn != null ? this.runAgainOn.equals(that.runAgainOn) : that.runAgainOn == null;
        }

        @Override
        public final int hashCode() {
            int result = this.command.hashCode();
            result = 31 * result + (this.instanceIds.hashCode());
            result = 31 * result + (this.runAgainOn != null ? this.runAgainOn.hashCode() : 0);
            return result;
        }
    }
}
